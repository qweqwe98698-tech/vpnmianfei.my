// scripts/audit-deep.mjs
import fs from 'fs';
import path from 'path';

const raw = JSON.parse(fs.readFileSync('audit-raw-results.json', 'utf8'));

console.log('=== 1. Non-compliant External Links (All 29) ===');
for (const item of raw.externalLinks.nonCompliant) {
  console.log(`- File: ${item.file} | URL: ${item.href} | Missing: ${item.missing.join(', ')}`);
}

console.log('\n=== 2. Duplicate Titles ===');
for (const [title, files] of Object.entries(raw.titles.duplicates)) {
  console.log(`Title: "${title}"`);
  console.log('Files:', files);
}

console.log('\n=== 3. Duplicate Descriptions ===');
for (const [desc, files] of Object.entries(raw.descriptions.duplicates)) {
  console.log(`Desc: "${desc}"`);
  console.log('Files:', files);
}

console.log('\n=== 4. Inspect Multiple H1 ===');
for (const item of raw.h1.multiH1) {
  const content = fs.readFileSync('dist/' + item.file, 'utf8');
  const h1s = [...content.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
  console.log(`File: ${item.file} has ${item.count} H1 tags:`, h1s);
}

console.log('\n=== 5. Inspect Analytics Mentions ===');
for (const f of raw.fingerprints.analytics) {
  const content = fs.readFileSync('dist/' + f, 'utf8');
  const matches = content.match(/(G-[A-Z0-9]+|UA-[0-9-]+|hm\.baidu\.com)/gi) || [];
  console.log(`File: ${f} matches:`, matches);
}

console.log('\n=== 6. Inspect Schema.org / JSON-LD ===');
const sampleFile = 'dist/index.html';
const sampleContent = fs.readFileSync(sampleFile, 'utf8');
const schemas = [...sampleContent.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
schemas.forEach((s, idx) => {
  console.log(`Schema #${idx + 1} in index.html:`);
  console.log(s[1].slice(0, 300));
});

const faqFile = 'dist/faq/index.html';
const faqContent = fs.readFileSync(faqFile, 'utf8');
const faqSchemas = [...faqContent.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
faqSchemas.forEach((s, idx) => {
  console.log(`Schema #${idx + 1} in faq/index.html:`);
  console.log(s[1].slice(0, 400));
});
