// scripts/fix-pillars.mjs
import fs from 'fs';
import path from 'path';

const dir = 'src/content/pillars';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));

let totalLinksReplaced = 0;
let totalH1Downgraded = 0;

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // 1. Downgrade `# ` to `## ` (only if starts with `# ` at top of body)
  // Matches `# Some Title` (but not `##` or `###`)
  const h1Match = content.match(/\n# ([^\n]+)/);
  if (h1Match) {
    content = content.replace(/\n# ([^\n]+)/, '\n## $1');
    totalH1Downgraded++;
    console.log(`[H1 Fix] Downgraded H1 to H2 in ${file}`);
  }

  // 2. Replace external markdown links [text](url) with <a href="url" target="_blank" rel="nofollow sponsored noopener">text</a>
  content = content.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, (match, text, url) => {
    if (!url.includes('vpnmianfei.my') && !url.startsWith('/')) {
      totalLinksReplaced++;
      return `<a href="${url}" target="_blank" rel="nofollow sponsored noopener">${text}</a>`;
    }
    return match;
  });

  fs.writeFileSync(filePath, content, 'utf8');
}

console.log(`Finished: Downgraded ${totalH1Downgraded} H1 headings, replaced ${totalLinksReplaced} external links.`);
