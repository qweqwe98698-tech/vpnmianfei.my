// scripts/verify-seo-infra.mjs
import fs from 'fs';

console.log('=== SEO INFRASTRUCTURE FINAL ACCEPTANCE ===');

// 1. Robots.txt
const robots = fs.readFileSync('dist/robots.txt', 'utf8');
console.log('1. Robots.txt:');
console.log('   - Has Googlebot:', robots.includes('User-agent: Googlebot'));
console.log('   - Has bingbot:', robots.includes('User-agent: bingbot'));
console.log('   - Has Baiduspider:', robots.includes('User-agent: Baiduspider'));
console.log('   - Has yisouspider:', robots.includes('User-agent: yisouspider'));
console.log('   - Sitemap.xml declared:', robots.includes('Sitemap: https://vpnmianfei.my/sitemap.xml'));
console.log('   - Sitemap-index.xml declared:', robots.includes('Sitemap: https://vpnmianfei.my/sitemap-index.xml'));

// 2. Sitemap files
console.log('\n2. Sitemaps in dist:');
console.log('   - dist/sitemap.xml exists:', fs.existsSync('dist/sitemap.xml'));
console.log('   - dist/sitemap-index.xml exists:', fs.existsSync('dist/sitemap-index.xml'));
console.log('   - dist/sitemap-0.xml exists:', fs.existsSync('dist/sitemap-0.xml'));

// 3. Inspect pages
const pages = [
  { name: '首页', path: 'dist/index.html', canonical: 'https://vpnmianfei.my/' },
  { name: '精选实测(栏目)', path: 'dist/reviews/index.html', canonical: 'https://vpnmianfei.my/reviews/' },
  { name: '专线与协议(栏目)', path: 'dist/iplc/index.html', canonical: 'https://vpnmianfei.my/iplc/' },
  { name: '客户端教程(栏目)', path: 'dist/clients/index.html', canonical: 'https://vpnmianfei.my/clients/' },
  { name: 'AI与流媒体(栏目)', path: 'dist/unlock/index.html', canonical: 'https://vpnmianfei.my/unlock/' },
  { name: '免费资源(专题)', path: 'dist/free/index.html', canonical: 'https://vpnmianfei.my/free/' },
  { name: '跑路预警(专题)', path: 'dist/warning/index.html', canonical: 'https://vpnmianfei.my/warning/' },
  { name: '全科FAQ(专题)', path: 'dist/faq/index.html', canonical: 'https://vpnmianfei.my/faq/' },
  { name: '42家品牌库(品牌页)', path: 'dist/directory/index.html', canonical: 'https://vpnmianfei.my/directory/' },
  { name: '光速云(文章评测)', path: 'dist/reviews/guangsu-cloud/index.html', canonical: 'https://vpnmianfei.my/reviews/guangsu-cloud/' }
];

console.log('\n3. Core Page Inspections:');
for (const p of pages) {
  const html = fs.readFileSync(p.path, 'utf8');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1];
  const desc = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']*)["']/i)?.[1];
  const canonical = html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']*)["']/i)?.[1];
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;
  const h1Text = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1]?.replace(/<[^>]+>/g, '').trim();
  const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']*)["']/i)?.[1];
  const hasSchema = html.includes('application/ld+json');

  console.log(`\n--- [${p.name}] ---`);
  console.log(`   Canonical match: ${canonical === p.canonical ? 'OK' : 'FAIL'} (${canonical})`);
  console.log(`   Title: ${title}`);
  console.log(`   H1 Count: ${h1Count} (Text: "${h1Text}")`);
  console.log(`   Robots: ${robotsMeta}`);
  console.log(`   Has Schema JSON-LD: ${hasSchema}`);
  if (p.name.includes('文章评测')) {
    const pubTime = html.match(/<meta[^>]+property=["']article:published_time["'][^>]+content=["']([^"']*)["']/i)?.[1];
    const author = html.match(/<meta[^>]+property=["']article:author["'][^>]+content=["']([^"']*)["']/i)?.[1];
    const section = html.match(/<meta[^>]+property=["']article:section["'][^>]+content=["']([^"']*)["']/i)?.[1];
    console.log(`   Article OG tags: Published="${pubTime}", Author="${author}", Section="${section}"`);
  }
}
