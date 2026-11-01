// scripts/audit.mjs
import fs from 'fs';
import path from 'path';

function globFiles(dir) {
  let res = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) res = res.concat(globFiles(p));
    else if (e.name.endsWith('.html')) res.push(p);
  }
  return res;
}

const htmlFiles = globFiles('dist');
console.log(`Found ${htmlFiles.length} HTML files in dist.`);

const auditResults = {
  canonical: { total: 0, validSelfRef: 0, missing: [], nonSelf: [] },
  externalLinks: { total: 0, compliant: 0, nonCompliant: [] },
  internalLinks: { total: 0, valid: 0, broken: [] },
  titles: { total: 0, duplicates: {}, empty: [] },
  descriptions: { total: 0, duplicates: {}, empty: [] },
  h1: { missingH1: [], multiH1: [] },
  wordCounts: [],
  schemas: { total: 0, types: {}, errors: [] },
  fingerprints: { analytics: [], internalIpPaths: [] }
};

const titleMap = new Map();
const descMap = new Map();

for (const f of htmlFiles) {
  const content = fs.readFileSync(f, 'utf8');
  const relPath = path.relative('dist', f).replace(/\\/g, '/');

  // Skip 404.html for certain tests
  const is404 = relPath === '404.html';

  // 1. Canonical audit
  const cMatch = content.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) ||
                 content.match(/<link[^>]+href=["']([^"']+)["'][^>]+rel=["']canonical["']/i);
  if (!cMatch) {
    if (!is404) auditResults.canonical.missing.push(relPath);
  } else {
    auditResults.canonical.total++;
    const canonicalUrl = cMatch[1];
    let expectedUrl = 'https://vppnianfei.my/' + relPath.replace(/\/index\.html$/, '/').replace(/^index\.html$/, '');
    expectedUrl = expectedUrl.replace('https://vppnianfei.my/', 'https://vpnmianfei.my/');
    if (!canonicalUrl.startsWith('https://vpnmianfei.my')) {
      auditResults.canonical.nonSelf.push({ file: relPath, canonical: canonicalUrl, reason: 'Wrong domain/protocol' });
    }
  }

  // 2. Titles and Meta descriptions
  const tMatch = content.match(/<title>([^<]*)<\/title>/i);
  if (!tMatch || !tMatch[1].trim()) {
    auditResults.titles.empty.push(relPath);
  } else {
    const t = tMatch[1].trim();
    auditResults.titles.total++;
    if (!titleMap.has(t)) titleMap.set(t, []);
    titleMap.get(t).push(relPath);
  }

  const dMatch = content.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i);
  if (!dMatch || !dMatch[1].trim()) {
    auditResults.descriptions.empty.push(relPath);
  } else {
    const d = dMatch[1].trim();
    auditResults.descriptions.total++;
    if (!descMap.has(d)) descMap.set(d, []);
    descMap.get(d).push(relPath);
  }

  // 3. H1 tags
  const h1Matches = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
  if (h1Matches.length === 0 && !is404) {
    auditResults.h1.missingH1.push(relPath);
  } else if (h1Matches.length > 1) {
    auditResults.h1.multiH1.push({ file: relPath, count: h1Matches.length });
  }

  // 4. Links audit (Internal & External)
  const linkMatches = [...content.matchAll(/<a\b([^>]*)>/gi)];
  for (const lm of linkMatches) {
    const attrs = lm[1];
    const hrefMatch = attrs.match(/href=["']([^"']*)["']/i);
    if (!hrefMatch) continue;
    const href = hrefMatch[1];

    if (href.startsWith('http://') || href.startsWith('https://')) {
      // Check if external
      if (!href.startsWith('https://vpnmianfei.my') && !href.startsWith('http://localhost')) {
        auditResults.externalLinks.total++;
        const relMatch = attrs.match(/rel=["']([^"']*)["']/i);
        const rel = relMatch ? relMatch[1] : '';
        const hasNofollow = rel.includes('nofollow');
        const hasSponsored = rel.includes('sponsored');
        const hasNoopener = rel.includes('noopener');
        if (!hasNofollow) {
          auditResults.externalLinks.nonCompliant.push({
            file: relPath,
            href: href,
            rel: rel,
            missing: ['nofollow', !hasSponsored && 'sponsored', !hasNoopener && 'noopener'].filter(Boolean)
          });
        } else {
          auditResults.externalLinks.compliant++;
        }
      }
    } else if (href.startsWith('/') && !href.startsWith('//')) {
      // Internal link
      auditResults.internalLinks.total++;
      const cleanHref = href.split('#')[0].split('?')[0];
      if (cleanHref) {
        let targetFile = path.join('dist', cleanHref);
        if (cleanHref.endsWith('/')) targetFile = path.join(targetFile, 'index.html');
        else if (!targetFile.endsWith('.html') && !targetFile.endsWith('.xml') && !targetFile.endsWith('.txt')) {
          targetFile = path.join(targetFile, 'index.html');
        }
        if (!fs.existsSync(targetFile)) {
          auditResults.internalLinks.broken.push({ file: relPath, href: href, targetFile: targetFile });
        } else {
          auditResults.internalLinks.valid++;
        }
      }
    }
  }

  // 5. Word count (excluding tags, scripts, styles)
  let text = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  text = text.replace(/<[^>]+>/g, ' ');
  text = text.replace(/\s+/g, ' ').trim();
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = (text.match(/[a-zA-Z0-9_-]+/g) || []).length;
  auditResults.wordCounts.push({ file: relPath, chineseChars, totalEquivalent: chineseChars + Math.round(englishWords * 0.6) });

  // 6. Schema audit
  const schemaMatches = [...content.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  for (const sm of schemaMatches) {
    auditResults.schemas.total++;
    try {
      const parsed = JSON.parse(sm[1]);
      const type = parsed['@type'] || (parsed['@graph'] ? 'Graph' : 'Unknown');
      auditResults.schemas.types[type] = (auditResults.schemas.types[type] || 0) + 1;
    } catch (e) {
      auditResults.schemas.errors.push({ file: relPath, error: e.message });
    }
  }

  // 7. Security & fingerprint leak
  if (content.includes('G-') || content.includes('UA-') || content.includes('hm.baidu.com')) {
    auditResults.fingerprints.analytics.push(relPath);
  }
  if (content.match(/C:\\Users|C:\/Users|\/home\/|\/var\/www/i)) {
    auditResults.fingerprints.internalIpPaths.push(relPath);
  }
}

// Find duplicates
for (const [t, files] of titleMap.entries()) {
  if (files.length > 1) auditResults.titles.duplicates[t] = files;
}
for (const [d, files] of descMap.entries()) {
  if (files.length > 1) auditResults.descriptions.duplicates[d] = files;
}

console.log('--- AUDIT SUMMARY ---');
console.log('Missing Canonical:', auditResults.canonical.missing);
console.log('Non-self/Protocol Canonical:', auditResults.canonical.nonSelf.length);
console.log('External Links Total:', auditResults.externalLinks.total);
console.log('Non-compliant External Links:', auditResults.externalLinks.nonCompliant.length);
if (auditResults.externalLinks.nonCompliant.length > 0) {
  console.log('Sample non-compliant external:', auditResults.externalLinks.nonCompliant.slice(0, 5));
}
console.log('Internal Links Total:', auditResults.internalLinks.total);
console.log('Broken Internal Links:', auditResults.internalLinks.broken.length);
if (auditResults.internalLinks.broken.length > 0) {
  console.log('Broken links:', auditResults.internalLinks.broken.slice(0, 10));
}
console.log('Empty Titles:', auditResults.titles.empty);
console.log('Duplicate Titles count:', Object.keys(auditResults.titles.duplicates).length);
console.log('Empty Descriptions:', auditResults.descriptions.empty);
console.log('Duplicate Descriptions count:', Object.keys(auditResults.descriptions.duplicates).length);
console.log('Missing H1:', auditResults.h1.missingH1);
console.log('Multiple H1:', auditResults.h1.multiH1);
console.log('Schema Types:', auditResults.schemas.types);
console.log('Schema Errors:', auditResults.schemas.errors);
console.log('Analytics IDs found in files:', auditResults.fingerprints.analytics.length);
console.log('Path leaks found in files:', auditResults.fingerprints.internalIpPaths.length);

const thinPages = auditResults.wordCounts.filter(w => w.chineseChars < 500 && !w.file.includes('404.html') && !w.file.includes('rss.xml'));
console.log('Thin pages (< 500 Chinese chars):', thinPages);

fs.writeFileSync('audit-raw-results.json', JSON.stringify(auditResults, null, 2), 'utf8');
