// src/pages/sitemap.xml.ts
import type { APIContext } from 'astro';
import { site as siteConfig } from '../config';

export function GET({ site }: APIContext) {
  const base = site ?? new URL(siteConfig.url);
  const sitemap0 = new URL('sitemap-0.xml', base).href;

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${sitemap0}</loc>
  </sitemap>
</sitemapindex>
`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
