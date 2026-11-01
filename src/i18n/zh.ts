// 中文界面语言包
export default {
  // 布局
  skip: '跳至主要内容',
  desks: '栏目分类',

  // 统计与时间
  by: '评测编辑',
  minutes: (n: number) => `阅读约 ${n} 分钟`,
  stories: (n: number) => `共 ${n} 篇专业评测与指南`,

  // 文章与侧边栏
  figures: '核心实测指标',
  moreFrom: (desk: string) => `更多「${desk}」精选`,
  filedTo: '收录专栏',
  relatedReading: '延伸实测与选型推荐',

  // 列表与分页
  photoEssay: '测速与解锁大图展板',
  pagination: '页面导航',
  newer: '← 上一页',
  older: '下一页 →',
  pageOf: (n: number, total: number) => `第 ${n} 页 / 共 ${total} 页`,

  // 404
  notFound: '未找到相关页面',
  notFoundLine: '您访问的评测或指南页面不存在或已被归档。',
  backHome: '返回网站首页',
};
