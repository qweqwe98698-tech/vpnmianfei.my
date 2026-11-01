// src/config.ts — single entry point for site settings. Everything site-specific lives here; never hardcode in components.
import defaultOgImage from './assets/sample/the-cranes-at-kieldrecht.avif';

export const site = {
  name: 'vpn免费',
  description:
    '2026 稳定机场推荐与网络可观测实验室：涵盖42家主流机场深度测速、IEPL/IPLC专线延迟横评、ChatGPT与流媒体解锁实测及全平台代理客户端配置教程。',
  url: process.env.SITE_URL ?? 'https://vpnmianfei.my',
  locale: 'zh',
  author: '网络实验室测试组',
  defaultOgImage,
} as const;

export const nav = {
  header: [
    { label: '精选实测', href: '/reviews' },
    { label: '专线与协议', href: '/iplc' },
    { label: '客户端教程', href: '/clients' },
    { label: 'AI与流媒体', href: '/unlock' },
    { label: '免费资源', href: '/free' },
    { label: '跑路预警', href: '/warning' },
    { label: '全科FAQ', href: '/faq' },
    { label: '42家品牌库', href: '/directory' },
  ],
  footer: [
    {
      title: '核心专栏',
      links: [
        { label: '精选机场实测', href: '/reviews' },
        { label: 'IEPL/IPLC专线解析', href: '/iplc' },
        { label: '客户端配置全集', href: '/clients' },
        { label: '流媒体与AI解锁', href: '/unlock' },
      ],
    },
    {
      title: '特色智库',
      links: [
        { label: '免费出海资源全景', href: '/free' },
        { label: '机场跑路避坑预警', href: '/warning' },
        { label: '全科FAQ疑难排错', href: '/faq' },
        { label: '42家品牌全景库', href: '/directory' },
      ],
    },
    {
      title: '数据与合规',
      links: [
        { label: '评测准则与关于我们', href: '/colophon' },
        { label: 'RSS 订阅源', href: '/rss.xml' },
      ],
    },
  ],
  social: [] as readonly { label: string; href: string; icon: string }[],
} as const;

export const seo = {
  titleTemplate: '%s · vpn免费 | 2026稳定机场实测与选型指南',
  twitterHandle: '',
  jsonLd: { type: 'Organization' as 'Person' | 'Organization', name: site.name },
};

// 搜索引擎站长平台验证配置 (Google / Bing / 神马 / 百度，绝不编造伪码，预留供配置)
export const verification = {
  google: process.env.GOOGLE_SITE_VERIFICATION ?? '',
  bing: process.env.BING_SITE_VERIFICATION ?? '',
  shenma: process.env.SHENMA_SITE_VERIFICATION ?? '',
  baidu: process.env.BAIDU_SITE_VERIFICATION ?? '',
};

// 首页与栏目封面版式
export const coverLines = {
  overlay: true,
  divider: 'plus' as 'plus' | 'rule' | 'none',
  max: 3,
};

export const blog = {
  postsPerPage: 4,
  relatedPosts: 3,
  showReadingTime: true,
};

export const features = {
  darkMode: true,
};

export const analytics = {
  provider: null as null | 'plausible' | 'ga4' | 'umami',
  id: '',
  host: '',
};
