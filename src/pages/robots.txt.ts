// src/pages/robots.txt.ts — 搜索引擎与各爬虫访问规范
import type { APIContext } from 'astro';
import { site as siteConfig } from '../config';

export function GET({ site }: APIContext) {
  const base = site ?? new URL(siteConfig.url);
  const sitemapIndexUrl = new URL('sitemap-index.xml', base).href;
  const sitemapUrl = new URL('sitemap.xml', base).href;

  return new Response(
    [
      '# 全局爬虫访问规则',
      'User-agent: *',
      'Allow: /',
      'Disallow: /styleguide',
      '',
      '# Google 搜索引擎爬虫',
      'User-agent: Googlebot',
      'Allow: /',
      '',
      '# 微软必应 Bing 爬虫',
      'User-agent: bingbot',
      'Allow: /',
      '',
      '# 百度搜索引擎爬虫',
      'User-agent: Baiduspider',
      'Allow: /',
      '',
      '# 阿里神马 / UC / 夸克 搜索引擎爬虫',
      'User-agent: yisouspider',
      'Allow: /',
      '',
      '# 规范 XML Sitemap 索引',
      `Sitemap: ${sitemapUrl}`,
      `Sitemap: ${sitemapIndexUrl}`,
      '',
    ].join('\n'),
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    },
  );
}
