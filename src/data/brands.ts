// src/data/brands.ts — 42家机场品牌完整数据模型
export interface AirportBrand {
  id: string;
  name: string;
  rank: number;
  featured: boolean;
  affUrl: string;
  coupon: string | null;
  priceStarting: string;
  entryPrice: number;
  traffic: string;
  lineType: string;
  protocols: string[];
  clientTypes: string[];
  aiUnlock: string;
  streamingUnlock: string;
  highlights: string[];
  nodes: string;
  speedtest?: {
    speed: string;
    latency: string;
    downloadMax: string;
    packetLoss: string;
  };
  hasSpeedtestImage: boolean;
  speedtestFile?: string;
  hasUnlockImage: boolean;
  unlockFile?: string;
  summary: string;
  articleSlug: string | null;
}

export const brands: AirportBrand[] = [
  {
    "id": "guangsu",
    "name": "光速云",
    "rank": 1,
    "featured": true,
    "affUrl": "https://sahude.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "AMM",
    "priceStarting": "¥8/月（年付折合）",
    "entryPrice": 8,
    "traffic": "59GB - 900GB/月",
    "lineType": "IEPL专线 + 企业内网专线",
    "protocols": [
      "VLESS",
      "IEPL"
    ],
    "clientTypes": [
      "自研客户端",
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini / Meta AI",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K / HBO Max / TikTok",
    "highlights": [
      "2020年稳定运营",
      "双线路IEPL专线架构",
      "斯诺克147永久不过期套餐",
      "全节点2.5Gbps高带宽"
    ],
    "nodes": "香港×20、台湾×5、日本×10、新加坡×10、美国×10、英国、法国、德国等",
    "speedtest": {
      "speed": "529 Mbps",
      "latency": "22 ms",
      "downloadMax": "86.5 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "光速云-节点测速实测.png",
    "hasUnlockImage": true,
    "unlockFile": "photo_2026-08-19_12-18-40.jpg",
    "summary": "光速云作为2020年起运营的综合型旗舰机场，主打IEPL内网双线路与VLESS协议，实测晚高峰香港节点下行达529Mbps。支持原生IP全区流媒体与主流AI大模型访问，提供自研一键客户端与第三方通用订阅。",
    "articleSlug": "guangsu-cloud"
  },
  {
    "id": "weifeng",
    "name": "微风网络",
    "rank": 2,
    "featured": true,
    "affUrl": "https://edp01.breezenetaff.com/#/?code=t3huofyI",
    "coupon": "flat888",
    "priceStarting": "¥7/月（年付折合）",
    "entryPrice": 7,
    "traffic": "50GB - 1200GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "IEPL"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "Sing-box",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K / TikTok",
    "highlights": [
      "IEPL专线入门首选",
      "7×24小时AI值守客服",
      "原生IP节点覆盖全面",
      "年付约7元/月极致性价比"
    ],
    "nodes": "香港、新加坡、日本、美国、德国等多地原生IP",
    "speedtest": {
      "speed": "546 Mbps",
      "latency": "25 ms",
      "downloadMax": "68.2 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "微风-节点测速实测.png",
    "hasUnlockImage": true,
    "unlockFile": "photo_2026-09-07_12-51-58.jpg",
    "summary": "微风网络走纯正IEPL专线，入门价格亲民，香港节点延迟低至25ms。客服响应机制完善，适合学生党与轻度科学上网及AI交互用户。",
    "articleSlug": "weifeng-network"
  },
  {
    "id": "muguang",
    "name": "暮光加速",
    "rank": 3,
    "featured": true,
    "affUrl": "https://varnexa.twilightaff.com/#/?code=D1LHglg3",
    "coupon": "muguang5555",
    "priceStarting": "¥20/月",
    "entryPrice": 20,
    "traffic": "120GB - 1500GB/月",
    "lineType": "BGP智能调度 + 专线出口",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientTypes": [
      "Windows",
      "macOS",
      "iOS",
      "Android",
      "Linux全平台"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "BGP多入口智能选路",
      "多设备并发无限制",
      "7×24小时真人客服支持"
    ],
    "nodes": "港台日韩美新主流地区高密度部署",
    "speedtest": {
      "speed": "482 Mbps",
      "latency": "28 ms",
      "downloadMax": "60.2 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "幕光加速-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "暮光加速采用BGP多线入口与专线出口调度，保障三网宽带用户在高峰期的平稳连接，套餐流量梯度充裕，适合多设备共享家庭与办公用户。",
    "articleSlug": "muguang-speed"
  },
  {
    "id": "feimao",
    "name": "飞猫云",
    "rank": 4,
    "featured": true,
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": "flycat888",
    "priceStarting": "¥7/月",
    "entryPrice": 7,
    "traffic": "80GB - 1000GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN",
      "Surge"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K / HBO Max",
    "highlights": [
      "7元月付低门槛",
      "晚高峰稳定性保障",
      "流媒体全绿解锁"
    ],
    "nodes": "香港、日本、美国、新加坡、英国等",
    "speedtest": {
      "speed": "512 Mbps",
      "latency": "31 ms",
      "downloadMax": "64.0 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "飞猫云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "飞猫云在平价IEPL专线机场中表现亮眼，8折优惠后性价比极高，主流流媒体解锁率优异，适合流媒体追剧党与日常出海用户。",
    "articleSlug": "feimao-cloud"
  },
  {
    "id": "dalaoyun",
    "name": "大佬云",
    "rank": 5,
    "featured": false,
    "affUrl": "https://qwerty.dalaoyunaff.com/#/?code=jCPLmoWN",
    "coupon": "dly888",
    "priceStarting": "¥5.6/月",
    "entryPrice": 5.6,
    "traffic": "60GB - 500GB/月",
    "lineType": "隧道中转 + 专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT部分节点",
    "streamingUnlock": "YouTube 4K / Netflix部分",
    "highlights": [
      "5.6元超低月付单价",
      "轻量备用首选",
      "多节点轮询"
    ],
    "nodes": "香港、台湾、日本、美国",
    "speedtest": {
      "speed": "210 Mbps",
      "latency": "48 ms",
      "downloadMax": "26 MB/s",
      "packetLoss": "0.5%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "极低预算备用首选，月费仅5.6元起，满足轻量查资料、网页浏览及偶尔使用需求。",
    "articleSlug": "dalaoyun"
  },
  {
    "id": "xingdaomeng",
    "name": "星岛梦",
    "rank": 6,
    "featured": true,
    "affUrl": "https://guangs.xingdaomeng.com/#/?code=1TynBYnR",
    "coupon": "nmw888",
    "priceStarting": "¥16/月",
    "entryPrice": 16,
    "traffic": "120GB - 不限时包",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "Stash"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "2020年开业老牌",
      "不限时流量包不过期",
      "晚高峰专线抗封锁"
    ],
    "nodes": "亚太及欧美核心节点",
    "speedtest": {
      "speed": "460 Mbps",
      "latency": "35 ms",
      "downloadMax": "57.5 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "星岛梦-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "星岛梦运营多年，除了周期套餐外提供长效不限时流量包，适合出差较多或用量不固定的用户。",
    "articleSlug": "xingdaomeng"
  },
  {
    "id": "ermao",
    "name": "二猫云",
    "rank": 7,
    "featured": true,
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": "ermao5555",
    "priceStarting": "¥20/月 (130GB)",
    "entryPrice": 20,
    "traffic": "130GB - 800GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "20元130GB经典方案",
      "晚高峰测速稳定",
      "多入口智能解析"
    ],
    "nodes": "香港、日本、新加坡、美国",
    "speedtest": {
      "speed": "505 Mbps",
      "latency": "29 ms",
      "downloadMax": "63 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "二猫云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "二猫云在实测批次中展现出均衡的下行与延迟表现，20元档位流量充足，为外贸办公与多媒体娱乐主力节点。",
    "articleSlug": "ermao-cloud"
  },
  {
    "id": "wuyou",
    "name": "无忧链接",
    "rank": 8,
    "featured": false,
    "affUrl": "https://wep01.worryfreeaff.com/#/?code=4ZoSbLdL",
    "coupon": "wuyou666",
    "priceStarting": "¥6/月",
    "entryPrice": 6,
    "traffic": "60GB - 400GB/月",
    "lineType": "多线中转",
    "protocols": [
      "Shadowsocks",
      "Trojan"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "部分节点支持",
    "streamingUnlock": "YouTube 4K",
    "highlights": [
      "全客户端原生订阅",
      "免转换直连导入",
      "6元轻量入门"
    ],
    "nodes": "香港、台湾、日本、美国",
    "speedtest": {
      "speed": "240 Mbps",
      "latency": "42 ms",
      "downloadMax": "30 MB/s",
      "packetLoss": "0.3%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "无忧链接主打极简订阅导入体验，支持各大第三方客户端免转换一键导入，新手配置零阻碍。",
    "articleSlug": "wuyou-link"
  },
  {
    "id": "weitu",
    "name": "唯兔云",
    "rank": 9,
    "featured": true,
    "affUrl": "https://guangs.v2yunvipaff.com/#/?code=xIutqOBA",
    "coupon": "weitu666",
    "priceStarting": "¥18/月",
    "entryPrice": 18,
    "traffic": "100GB - 800GB/月",
    "lineType": "三网优化 + 智能负载均衡",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "60+节点高冗余部署",
      "三网智能分流均衡",
      "单点故障秒级转移"
    ],
    "nodes": "全球60余处落地接入点",
    "speedtest": {
      "speed": "430 Mbps",
      "latency": "33 ms",
      "downloadMax": "53.8 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "唯兔云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "唯兔云具备规模化节点池与智能负载均衡，在多省份移动、联通宽带测速下均保持低抖动。",
    "articleSlug": "weitu-cloud"
  },
  {
    "id": "firefly",
    "name": "Firefly 萤火虫",
    "rank": 10,
    "featured": false,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=2n7VURre",
    "coupon": "firefly",
    "priceStarting": "¥25/月 (年付折合8元/月)",
    "entryPrice": 25,
    "traffic": "60GB - 1000GB/月",
    "lineType": "IPLC内网专线 + VLESS",
    "protocols": [
      "VLESS",
      "IPLC"
    ],
    "clientTypes": [
      "全平台通用订阅"
    ],
    "aiUnlock": "ChatGPT / Gemini / Meta AI",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "全专线IPLC接入",
      "不限速不限设备",
      "原生落地IP池",
      "免翻墙官网直达"
    ],
    "nodes": "港台日新美韩澳等核心节点",
    "speedtest": {
      "speed": "380 Mbps",
      "latency": "38 ms",
      "downloadMax": "47.5 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "Firefly主打全专线IPLC传输与VLESS协议，提供原生IP支持及多档不限时流量包。",
    "articleSlug": "firefly-vpn"
  },
  {
    "id": "yuzhou",
    "name": "宇宙云",
    "rank": 11,
    "featured": true,
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "YUZHOU553",
    "priceStarting": "¥19/月",
    "entryPrice": 19,
    "traffic": "120GB - 900GB/月",
    "lineType": "IEPL专线 + VLESS",
    "protocols": [
      "VLESS"
    ],
    "clientTypes": [
      "自研客户端",
      "Clash",
      "Shadowrocket"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "VLESS协议深度调优",
      "提供自研专属客户端",
      "香港节点延迟极低"
    ],
    "nodes": "香港、日本、新加坡、美国等",
    "speedtest": {
      "speed": "495 Mbps",
      "latency": "27 ms",
      "downloadMax": "61.8 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "宇宙云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "宇宙云采用新一代VLESS协议配合IEPL专线，自研客户端对新手友好，晚高峰测速表现硬核。",
    "articleSlug": "yuzhou-cloud"
  },
  {
    "id": "u1s1",
    "name": "U1S1",
    "rank": 12,
    "featured": true,
    "affUrl": "https://guangs.vipaff.cc/#/?code=xhX5X22f",
    "coupon": "akaka",
    "priceStarting": "¥20/月 (120GB)",
    "entryPrice": 20,
    "traffic": "120GB - 700GB/月",
    "lineType": "专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "20元120GB实惠方案",
      "节点可用率99%+",
      "延迟响应迅速"
    ],
    "nodes": "香港、日本、美国、新加坡",
    "speedtest": {
      "speed": "475 Mbps",
      "latency": "34 ms",
      "downloadMax": "59.3 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "U1S1-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "U1S1以诚实稳定为口碑，实测晚高峰节点连通率极高，无虚标倍率，日常使用稳定省心。",
    "articleSlug": "u1s1-cloud"
  },
  {
    "id": "lingmao",
    "name": "灵猫网络",
    "rank": 13,
    "featured": true,
    "affUrl": "https://vip01.civetnet.com/#/?code=8MIAyxak",
    "coupon": "lmao888",
    "priceStarting": "¥19/月 (150GB)",
    "entryPrice": 19,
    "traffic": "150GB - 不限时包",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "Stash"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "19元150GB大流量",
      "兼具周期与不限时方案",
      "流媒体全绿解锁"
    ],
    "nodes": "港日美新德法英等多国节点",
    "speedtest": {
      "speed": "488 Mbps",
      "latency": "30 ms",
      "downloadMax": "61 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "灵猫网络-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "灵猫网络在20元以内提供高达150GB月流量，IEPL专线加持下晚高峰观看4K视频流畅无缓冲。",
    "articleSlug": "lingmao-network"
  },
  {
    "id": "jilian",
    "name": "极连云",
    "rank": 14,
    "featured": true,
    "affUrl": "https://guangs.jlyvipaff.com/#/?code=VM1rKGUu",
    "coupon": "ji8888",
    "priceStarting": "¥18/月 (100GB)",
    "entryPrice": 18,
    "traffic": "100GB - 600GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude全面支持",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "18元起入门款",
      "AI大模型全面优化",
      "节点低时延调度"
    ],
    "nodes": "香港、日本、美国、新加坡原生IP",
    "speedtest": {
      "speed": "465 Mbps",
      "latency": "32 ms",
      "downloadMax": "58 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "极连云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "极连云针对AI工具（ChatGPT、Claude）访问做了专属分流规则优化，节点纯净度高，不易触发Cloudflare人机验证。",
    "articleSlug": "jilian-cloud"
  },
  {
    "id": "guangnian",
    "name": "光年梯",
    "rank": 15,
    "featured": true,
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "gnt6666",
    "priceStarting": "¥18/月 (110GB)",
    "entryPrice": 18,
    "traffic": "110GB - 700GB/月",
    "lineType": "专线内网",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "18元110GB方案",
      "抗拥塞算法优化",
      "全时段带宽充足"
    ],
    "nodes": "香港、新加坡、日本、美国",
    "speedtest": {
      "speed": "445 Mbps",
      "latency": "36 ms",
      "downloadMax": "55.6 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "光年梯-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "光年梯采用专线内网架构，针对晚高峰跨网拥塞做了专项算法优化，节点可用性表现稳定。",
    "articleSlug": "guangnian-ti"
  },
  {
    "id": "yifan",
    "name": "一翻云",
    "rank": 16,
    "featured": true,
    "affUrl": "https://guangs.1flyunaff.cc/#/register?code=Yr7FhB7r",
    "coupon": "yfy6666",
    "priceStarting": "¥20/月 (150GB)",
    "entryPrice": 20,
    "traffic": "150GB - 800GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "20元150GB大带宽",
      "晚高峰4K秒开",
      "全客户端极速订阅"
    ],
    "nodes": "亚太核心自营节点",
    "speedtest": {
      "speed": "515 Mbps",
      "latency": "26 ms",
      "downloadMax": "64.4 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "一翻云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "一翻云在实测中亚洲近端香港和日本节点下行均突破500Mbps，适合重度超高清视频流媒体用户。",
    "articleSlug": "yifan-cloud"
  },
  {
    "id": "sogo",
    "name": "SOGO 云",
    "rank": 17,
    "featured": true,
    "affUrl": "https://guangs.sogoyunaff.cc/#/?code=327Vs0w7",
    "coupon": "sss777",
    "priceStarting": "¥19/月",
    "entryPrice": 19,
    "traffic": "120GB - 600GB/月",
    "lineType": "专线网络",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "2026新晋实力品牌",
      "纯净原生IP落地",
      "低倍率透明计费"
    ],
    "nodes": "香港、日本、美国、新加坡",
    "speedtest": {
      "speed": "480 Mbps",
      "latency": "32 ms",
      "downloadMax": "60 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "SOGO云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "SOGO云拥有全新升级的网络硬件设施，节点负载低，晚高峰抗拥挤能力出色。",
    "articleSlug": "sogo-cloud"
  },
  {
    "id": "kexin",
    "name": "可信云",
    "rank": 18,
    "featured": true,
    "affUrl": "https://guangs.kosingaff.com/#/register?code=UYDtNlCY",
    "coupon": "kkk333",
    "priceStarting": "¥18/月",
    "entryPrice": 18,
    "traffic": "100GB - 500GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "官方数据透明无夸大",
      "多节点实测验证",
      "退订与退款说明清晰"
    ],
    "nodes": "亚太与欧美核心节点",
    "speedtest": {
      "speed": "440 Mbps",
      "latency": "35 ms",
      "downloadMax": "55 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "可信云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "可信云官方在资料中如实披露节点测试状态，运营作风严谨务实，在实际测速中表现稳定可信。",
    "articleSlug": "kexin-cloud"
  },
  {
    "id": "sujie",
    "name": "速界",
    "rank": 19,
    "featured": true,
    "affUrl": "https://guangs.speedworldaff.cc/#/register?code=xgXzEfZB",
    "coupon": "sss1111",
    "priceStarting": "¥19/月",
    "entryPrice": 19,
    "traffic": "120GB - 700GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini优选",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "强化AI工具访问支持",
      "低延迟游戏线路优化",
      "全天候带宽充裕"
    ],
    "nodes": "香港、日本、美国、新加坡",
    "speedtest": {
      "speed": "470 Mbps",
      "latency": "30 ms",
      "downloadMax": "58.7 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "速界-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "速界强调AI工具及游戏低延迟优化，香港与日本节点延迟稳定在30ms区间，适合办公与轻度外服游戏。",
    "articleSlug": "sujie-cloud"
  },
  {
    "id": "shanyue",
    "name": "闪跃",
    "rank": 20,
    "featured": false,
    "affUrl": "https://vip02.flashleapaff.com/#/?code=3lgzm9mm",
    "coupon": "shanyue",
    "priceStarting": "¥24/月 (150GB)",
    "entryPrice": 24,
    "traffic": "150GB - 1000GB/月",
    "lineType": "专线内网",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / YouTube 4K",
    "highlights": [
      "24元150GB高规格",
      "多地大宽带接入",
      "高并发连接支持"
    ],
    "nodes": "亚太欧美主流节点",
    "speedtest": {
      "speed": "410 Mbps",
      "latency": "38 ms",
      "downloadMax": "51.2 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "闪跃定位中高规格专线，单节点带宽冗余充裕，满足多设备高并发传输。",
    "articleSlug": "shanyue-cloud"
  },
  {
    "id": "quanqiu",
    "name": "全球云",
    "rank": 21,
    "featured": true,
    "affUrl": "https://guangs.gcvipaff.com/#/?code=Ov2nvU9C",
    "coupon": "qqy7777",
    "priceStarting": "¥19/月",
    "entryPrice": 19,
    "traffic": "120GB - 800GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "2026全新升级架构",
      "广泛节点地理覆盖",
      "全天候负载均衡"
    ],
    "nodes": "覆盖亚太、欧洲、美洲主流国家",
    "speedtest": {
      "speed": "460 Mbps",
      "latency": "34 ms",
      "downloadMax": "57.5 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": true,
    "speedtestFile": "全球云-节点测速实测.png",
    "hasUnlockImage": false,
    "summary": "全球云拥有丰富的多国冷门与热门落地节点，适合有跨国多地区切换需求的用户。",
    "articleSlug": "quanqiu-cloud"
  },
  {
    "id": "shandianshu",
    "name": "闪电鼠",
    "rank": 22,
    "featured": false,
    "affUrl": "https://qwerty.shandianshuaff.com/#/?code=rUE75iYh",
    "coupon": "sd88",
    "priceStarting": "¥5.6/月",
    "entryPrice": 5.6,
    "traffic": "60GB/月",
    "lineType": "隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "v2rayN"
    ],
    "aiUnlock": "基础可用",
    "streamingUnlock": "YouTube 1080P/4K",
    "highlights": [
      "5.6元极低价格",
      "轻量备用",
      "基础网页秒开"
    ],
    "nodes": "香港、日本、美国",
    "speedtest": {
      "speed": "180 Mbps",
      "latency": "55 ms",
      "downloadMax": "22 MB/s",
      "packetLoss": "0.8%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "超平价入门中转机场，价格实惠，适合轻度流量消耗及备用应急方案。",
    "articleSlug": "shandianshu"
  },
  {
    "id": "yunjiexian",
    "name": "云界线",
    "rank": 23,
    "featured": false,
    "affUrl": "https://qwerty.yunjiexianaff.com/?code=HBaZ91c6",
    "coupon": "yjx888",
    "priceStarting": "¥5.6/月",
    "entryPrice": 5.6,
    "traffic": "60GB/月",
    "lineType": "隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "v2rayN"
    ],
    "aiUnlock": "基础支持",
    "streamingUnlock": "YouTube 1080P",
    "highlights": [
      "平价轻量",
      "简易导入",
      "备用线路"
    ],
    "nodes": "亚太节点",
    "speedtest": {
      "speed": "170 Mbps",
      "latency": "58 ms",
      "downloadMax": "21 MB/s",
      "packetLoss": "1.0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "低成本备用中转机场，适合学生党查文献或作为备用线路。",
    "articleSlug": "yunjiexian"
  },
  {
    "id": "liulianyun",
    "name": "榴莲云",
    "rank": 24,
    "featured": false,
    "affUrl": "https://qwerty.liulianyunaff.com#/?code=hS5pvbfE",
    "coupon": "ll88",
    "priceStarting": "¥5.6/月",
    "entryPrice": 5.6,
    "traffic": "60GB/月",
    "lineType": "中转优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket"
    ],
    "aiUnlock": "部分节点可用",
    "streamingUnlock": "YouTube 1080P/4K",
    "highlights": [
      "低价亲民",
      "多节点可选",
      "即买即用"
    ],
    "nodes": "香港、日本、美国",
    "speedtest": {
      "speed": "190 Mbps",
      "latency": "52 ms",
      "downloadMax": "23 MB/s",
      "packetLoss": "0.6%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "轻量平价中转机场，支持主流客户端订阅。",
    "articleSlug": "liulianyun"
  },
  {
    "id": "shenxing",
    "name": "神行加速",
    "rank": 25,
    "featured": false,
    "affUrl": "https://qwerty.shenxingaff.com/#/?code=gawDQqVE",
    "coupon": "xs0077",
    "priceStarting": "¥14/月 (120GB)",
    "entryPrice": 14,
    "traffic": "120GB/月",
    "lineType": "专线中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / YouTube 4K",
    "highlights": [
      "14元中端价位",
      "120GB均衡流量",
      "节点延迟表现平稳"
    ],
    "nodes": "香港、日本、新加坡、美国",
    "speedtest": {
      "speed": "320 Mbps",
      "latency": "40 ms",
      "downloadMax": "40 MB/s",
      "packetLoss": "0.2%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "性价比中端机场，14元提供120GB月流量，兼顾日常刷视频与办公。",
    "articleSlug": "shenxing-speed"
  },
  {
    "id": "huanqiuti",
    "name": "环球梯",
    "rank": 26,
    "featured": false,
    "affUrl": "https://qwerty.huanqiutiaff.com/?code=9I4KRNPH",
    "coupon": "HQ66",
    "priceStarting": "¥5.6/月",
    "entryPrice": 5.6,
    "traffic": "60GB/月",
    "lineType": "隧道中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "v2rayN"
    ],
    "aiUnlock": "基础支持",
    "streamingUnlock": "YouTube 1080P",
    "highlights": [
      "低成本备用",
      "基础出海",
      "简易配置"
    ],
    "nodes": "亚太节点",
    "speedtest": {
      "speed": "180 Mbps",
      "latency": "54 ms",
      "downloadMax": "22 MB/s",
      "packetLoss": "0.7%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "超低预算中转备用方案。",
    "articleSlug": "huanqiuti"
  },
  {
    "id": "yinxingren",
    "name": "隐形人",
    "rank": 27,
    "featured": false,
    "affUrl": "https://yinxingren1.invisibleaff.com/#/?code=kcyEeoJT",
    "coupon": "yxr888",
    "priceStarting": "¥25/月",
    "entryPrice": 25,
    "traffic": "150GB/月",
    "lineType": "自研专网",
    "protocols": [
      "自研协议"
    ],
    "clientTypes": [
      "自研全平台专属客户端（不支持第三方订阅）"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "60+节点自研专属客户端",
      "承诺1小时故障响应",
      "傻瓜式一键登录"
    ],
    "nodes": "港美日新韩英法德等60+节点",
    "speedtest": {
      "speed": "390 Mbps",
      "latency": "35 ms",
      "downloadMax": "48.7 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "隐形人专为不愿配置Clash的新手设计，提供自研专属客户端一键连接，但不支持第三方订阅导入。",
    "articleSlug": "yinxingren"
  },
  {
    "id": "tiziyun",
    "name": "梯子云",
    "rank": 28,
    "featured": false,
    "affUrl": "https://tiziyun3.ladderaff.com/#/?code=7EmnpHs0",
    "coupon": "tiziyun",
    "priceStarting": "¥22/月",
    "entryPrice": 22,
    "traffic": "150GB/月",
    "lineType": "内网专线",
    "protocols": [
      "Shadowsocks",
      "VLESS"
    ],
    "clientTypes": [
      "自研全平台客户端 + 支持第三方订阅"
    ],
    "aiUnlock": "ChatGPT / Claude",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "自研客户端 + 通用订阅双支持",
      "60+节点池",
      "2Gbps+独立带宽"
    ],
    "nodes": "全球60余处落地",
    "speedtest": {
      "speed": "420 Mbps",
      "latency": "33 ms",
      "downloadMax": "52.5 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "梯子云兼顾自研一键客户端与第三方订阅导入，2Gbps带宽冗余充足，新手老手皆宜。",
    "articleSlug": "tiziyun"
  },
  {
    "id": "wgetcloud",
    "name": "WgetCloud",
    "rank": 29,
    "featured": false,
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": null,
    "priceStarting": "¥99/月 (季付¥297)",
    "entryPrice": 99,
    "traffic": "230GB - 270GB/月",
    "lineType": "高端企业级BGP专线",
    "protocols": [
      "Trojan"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "Surge",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Gemini部分支持",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "高端商务与企业办公专线",
      "单节点全速下行超50MB/s",
      "近端低时延调度"
    ],
    "nodes": "香港、台湾、新加坡、日本、美国、英德澳法等15国",
    "speedtest": {
      "speed": "462 Mbps",
      "latency": "26 ms",
      "downloadMax": "57.7 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "老牌高端专线服务商，季付起订，定位追求极致稳定性的外贸企业与高净值商务用户。",
    "articleSlug": "wgetcloud"
  },
  {
    "id": "baiyueguang",
    "name": "白月光",
    "rank": 30,
    "featured": false,
    "affUrl": "https://www.sibker.com/register?invite_code=gg6puAId",
    "coupon": null,
    "priceStarting": "¥22/月 (季付¥66)",
    "entryPrice": 22,
    "traffic": "100GB - 900GB/月",
    "lineType": "多节点中转",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "部分节点支持OpenAI",
    "streamingUnlock": "Netflix / Disney+ / YouTube / Bilibili港澳台",
    "highlights": [
      "108个丰富节点池",
      "涵盖79个冷门地区",
      "季付小包门槛适中"
    ],
    "nodes": "涵盖香港、东南亚、欧美及中东冷门地区79处",
    "speedtest": {
      "speed": "115 Mbps",
      "latency": "160 ms",
      "downloadMax": "14.4 MB/s",
      "packetLoss": "1.2%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "节点地区极其丰富的综合型机场，覆盖大量冷门国家原生IP，适合爬虫或多地域业务测试。",
    "articleSlug": "baiyueguang"
  },
  {
    "id": "flyingbird",
    "name": "FlyingBird 飞鸟",
    "rank": 31,
    "featured": false,
    "affUrl": "https://invite.wgetcloud.ltd/auth/register?code=VLG2xb",
    "coupon": "theo",
    "priceStarting": "¥15/月 (100GB)",
    "entryPrice": 15,
    "traffic": "100GB - 1000GB/月",
    "lineType": "全专线 IPLC",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "全专线IPLC接入",
      "无倍率不限速",
      "支持年付折扣优惠"
    ],
    "nodes": "亚太欧美主流节点",
    "speedtest": {
      "speed": "350 Mbps",
      "latency": "40 ms",
      "downloadMax": "43.7 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "老牌IPLC全专线品牌，以无倍率和高冗余带宽著称，适合大流量下载与长时在线用户。",
    "articleSlug": "flyingbird"
  },
  {
    "id": "cyberguard",
    "name": "CyberGuard",
    "rank": 32,
    "featured": false,
    "affUrl": "https://cyberguard.best/#/register?code=AxXNNYng",
    "coupon": null,
    "priceStarting": "¥32/月 (350GB)",
    "entryPrice": 32,
    "traffic": "150GB - 2050GB/月",
    "lineType": "高速专线",
    "protocols": [
      "Trojan",
      "VLESS"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / HBO Max / TikTok",
    "highlights": [
      "32元含350GB大流量",
      "支持不限时流量包",
      "涵盖12个国家29个节点"
    ],
    "nodes": "日本、美国、澳大利亚、韩国、德法阿联酋等",
    "speedtest": {
      "speed": "488 Mbps",
      "latency": "124 ms",
      "downloadMax": "61 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "流量充裕的大带宽机场，单价适中且拥有不限时流量包，实测流媒体与AI工具解锁全面。",
    "articleSlug": "cyberguard"
  },
  {
    "id": "longmaoyun",
    "name": "龙猫云",
    "rank": 33,
    "featured": false,
    "affUrl": "https://guangs.2maoyunaff.cc/#/?code=7mjvgGbW",
    "coupon": null,
    "priceStarting": "¥15/月 (100GB)",
    "entryPrice": 15,
    "traffic": "100GB - 1000GB/月",
    "lineType": "IPLC全专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "SS + IPLC全专线架构",
      "最高2000Mbps带宽",
      "完善的新手图文教程"
    ],
    "nodes": "亚太欧美主流节点",
    "speedtest": {
      "speed": "360 Mbps",
      "latency": "42 ms",
      "downloadMax": "45 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "龙猫云采用Shadowsocks与全专线IPLC，教程完善，适合长期稳定使用的常规订阅用户。",
    "articleSlug": "longmaoyun"
  },
  {
    "id": "fatcat",
    "name": "FATCAT 肥猫云",
    "rank": 34,
    "featured": false,
    "affUrl": "https://guangs.flycataff.com/#/?code=6uq0Xe9y",
    "coupon": null,
    "priceStarting": "¥8/月 (年付¥96)",
    "entryPrice": 8,
    "traffic": "60GB - 1500GB/月",
    "lineType": "企业级 IEPL/IPLC 内网专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "企业级内网抗封锁专线",
      "年付加强版仅96元",
      "多档流量与长期折扣"
    ],
    "nodes": "香港、日本、美国、新加坡",
    "speedtest": {
      "speed": "390 Mbps",
      "latency": "37 ms",
      "downloadMax": "48.7 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "肥猫云强调企业级抗干扰专线架构，年付性价比突出，适合追求低延迟与抗封锁的用户。",
    "articleSlug": "fatcat-cloud"
  },
  {
    "id": "tntcloud",
    "name": "TNTCloud",
    "rank": 35,
    "featured": false,
    "affUrl": "https://wzjc.yuzoucloud.cc/#/?code=yrThwMP1",
    "coupon": "TNT85",
    "priceStarting": "¥10/月 (季付¥30)",
    "entryPrice": 10,
    "traffic": "60GB - 1100GB/月",
    "lineType": "IPLC内网专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "曾用名3A加速器老牌团队",
      "2000Mbps内网专线",
      "支持TikTok与跨境电商定制"
    ],
    "nodes": "亚太欧美核心商业节点",
    "speedtest": {
      "speed": "410 Mbps",
      "latency": "35 ms",
      "downloadMax": "51 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "前身为3A加速器的老牌团队分站，提供季付轻量包及针对跨境直播的高规格定制方案。",
    "articleSlug": "tntcloud"
  },
  {
    "id": "qingyunti",
    "name": "青云梯",
    "rank": 36,
    "featured": false,
    "affUrl": "https://guangs.gntaff.com/#/?code=X1FoxjGE",
    "coupon": "qyt85",
    "priceStarting": "¥8/月 (年付¥96)",
    "entryPrice": 8,
    "traffic": "60GB - 1000GB/月",
    "lineType": "企业级 IPLC + 三网优化",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "运营6年以上老牌服务商",
      "三网优化智能负载均衡",
      "80+高密度节点集群"
    ],
    "nodes": "全球10+地区80+节点",
    "speedtest": {
      "speed": "420 Mbps",
      "latency": "33 ms",
      "downloadMax": "52 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "运营时间超6年的老牌专线机场，三网均衡优化成熟，节点冗余度高，稳定性经受住长期考验。",
    "articleSlug": "qingyunti"
  },
  {
    "id": "shanshuiyun",
    "name": "山水云",
    "rank": 37,
    "featured": false,
    "affUrl": "https://sldm1.ssyylf.com/#/register?code=YD5iQ888",
    "coupon": null,
    "priceStarting": "¥7.3/月 (年付¥88)",
    "entryPrice": 7.3,
    "traffic": "64GB - 500GB/月",
    "lineType": "多节点专线",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "ChatGPT / Claude / Gemini",
    "streamingUnlock": "Netflix / Disney+ / Max / TikTok",
    "highlights": [
      "年付88元低成本支出",
      "月付15元三档梯度清晰",
      "美日港三地测速优异"
    ],
    "nodes": "涵盖香港、日本、美国、新加坡、越南、泰国、英法德等12国",
    "speedtest": {
      "speed": "180 Mbps",
      "latency": "151 ms",
      "downloadMax": "22.5 MB/s",
      "packetLoss": "0.4%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "山水云提供明确的月付与年付低门槛梯度，实测欧美和亚太节点流媒体解锁覆盖完整。",
    "articleSlug": "shanshuiyun"
  },
  {
    "id": "lingdongyun",
    "name": "灵动云",
    "rank": 38,
    "featured": false,
    "affUrl": "https://varnexa.lingdongaff.com/#/?code=wZvEhEoI",
    "coupon": null,
    "priceStarting": "¥8.25/月 (年付¥99)",
    "entryPrice": 8.25,
    "traffic": "70GB - 1.5TB/月",
    "lineType": "IEPL专线 + VLESS",
    "protocols": [
      "VLESS",
      "Trojan"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "OpenAI / ChatGPT各地区全解锁",
    "streamingUnlock": "Netflix / Disney+ / YouTube",
    "highlights": [
      "2025新晋VLESS专线",
      "不限速不限设备",
      "单次流量包及私人定制"
    ],
    "nodes": "亚太欧美核心自营机房",
    "speedtest": {
      "speed": "380 Mbps",
      "latency": "45 ms",
      "downloadMax": "47.5 MB/s",
      "packetLoss": "0.2%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "2025年上线的VLESS专线机场，主打OpenAI大模型各区域原生IP全解锁，支持按量包与高配私人定制。",
    "articleSlug": "lingdongyun"
  },
  {
    "id": "langwang",
    "name": "浪网",
    "rank": 39,
    "featured": false,
    "affUrl": "https://varnexa.wavenetaff.com/#/?code=xwAM4tTd",
    "coupon": null,
    "priceStarting": "¥10/月 (年付¥119)",
    "entryPrice": 10,
    "traffic": "80GB - 2000GB/月",
    "lineType": "IEPL专线",
    "protocols": [
      "VLESS",
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "入门到商业多价格层级",
      "一次性流量包补充",
      "定制企业线路"
    ],
    "nodes": "亚太商业级专线节点",
    "speedtest": {
      "speed": "350 Mbps",
      "latency": "40 ms",
      "downloadMax": "43.7 MB/s",
      "packetLoss": "0.2%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "浪网提供从入门个人包到2000GB商业包的多层级阶梯，支持一次性流量包以满足临时高带宽需求。",
    "articleSlug": "langwang"
  },
  {
    "id": "edgenova",
    "name": "EdgeNova 极界",
    "rank": 40,
    "featured": false,
    "affUrl": "https://work.edgenovaaff.cc/#/register?code=cl3iB5YG",
    "coupon": "TH888",
    "priceStarting": "¥9/月 (年付¥108)",
    "entryPrice": 9,
    "traffic": "45GB - 1000GB/月",
    "lineType": "高速直连 / IPLC自动调度",
    "protocols": [
      "Shadowsocks"
    ],
    "clientTypes": [
      "Clash",
      "Shadowrocket",
      "v2rayN"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "多线路自动分配",
      "8折优惠码可用",
      "主流国内支付与USDT支持"
    ],
    "nodes": "港美日新高防落地",
    "speedtest": {
      "speed": "360 Mbps",
      "latency": "38 ms",
      "downloadMax": "45 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "EdgeNova以智能多线路路由与自动故障转移为特点，提供年付小包与常规月付多重选择。",
    "articleSlug": "edgenova"
  },
  {
    "id": "yinghuochong",
    "name": "萤火虫 Firefly Plus",
    "rank": 41,
    "featured": false,
    "affUrl": "https://vip02.fireflyaff.com/#/?code=jTp9wSgZ",
    "coupon": "firefly",
    "priceStarting": "¥8/月 (年付¥96)",
    "entryPrice": 8,
    "traffic": "60GB - 1000GB/月",
    "lineType": "IPLC + VLESS",
    "protocols": [
      "VLESS",
      "IPLC"
    ],
    "clientTypes": [
      "全平台通用订阅"
    ],
    "aiUnlock": "ChatGPT / Gemini / Meta AI",
    "streamingUnlock": "Netflix / Disney+ / YouTube 4K",
    "highlights": [
      "8年团队深耕",
      "不限速不限设备",
      "新用户8折优惠",
      "原生IP池配置"
    ],
    "nodes": "香港、日本、美国、新加坡原生IP",
    "speedtest": {
      "speed": "400 Mbps",
      "latency": "36 ms",
      "downloadMax": "50 MB/s",
      "packetLoss": "0%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "拥有长周期技术积淀的IPLC专线提供商，原生IP质量佳，对主流AI大模型访问支持良好。",
    "articleSlug": "yinghuochong"
  },
  {
    "id": "sslar",
    "name": "SSLAR",
    "rank": 42,
    "featured": false,
    "affUrl": "https://guangs.gsyvipaff.com/#/?code=keqgvT5Y",
    "coupon": "ko3eTt0w",
    "priceStarting": "¥13.6/月 (年付¥163)",
    "entryPrice": 13.6,
    "traffic": "100GB - 300GB/月",
    "lineType": "企业级 IEPL + 多线 BGP",
    "protocols": [
      "SS",
      "VLESS自适应"
    ],
    "clientTypes": [
      "自研客户端（Win/Mac/安卓） + 支持远程协助"
    ],
    "aiUnlock": "待核实",
    "streamingUnlock": "待核实",
    "highlights": [
      "自研跨平台客户端",
      "SS/VLESS协议自适应",
      "支持远程桌面技术协助"
    ],
    "nodes": "Eons/Akari/DigitalOcean机房优质节点",
    "speedtest": {
      "speed": "370 Mbps",
      "latency": "39 ms",
      "downloadMax": "46.2 MB/s",
      "packetLoss": "0.1%"
    },
    "hasSpeedtestImage": false,
    "hasUnlockImage": false,
    "summary": "面向商务用户的IEPL专线机场，独家具备远程桌面协助能力，适合对电脑操作不熟悉的外贸从业人员。",
    "articleSlug": "sslar"
  }
];
