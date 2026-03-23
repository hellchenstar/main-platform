export const sections = [
  {
    slug: 'news',
    name: '热门资讯',
    eyebrow: 'Signal Feed',
    description: '聚合 AI 行业快讯与实时热榜两条正式内容线，首页只保留真正可访问的资讯入口。',
    accent: '#3a6cf4',
    tone: '围绕快讯、热榜和专题追踪持续更新。',
    highlights: ['AI 行业快讯', '实时热榜', '专题追踪'],
    items: [
      {
        key: 'ai-briefing',
        title: 'AI 行业快讯',
        meta: '科技资讯 / 子应用 / 已上线',
        blurb: '独立 AI 资讯子应用，按日报与突发更新方式持续发布内容。',
        status: '已接入',
        accessMode: '同窗口子应用',
        target: '/apps/ai-briefing',
        childAppPath: 'https://hellchenstar.github.io/ai-briefing-web/',
        childAppDevUrl: 'http://127.0.0.1:4174/news/ai-briefing/',
        cta: '查看快讯'
      },
      {
        key: 'news-dashboard',
        title: '实时热榜面板',
        meta: '热点看板 / 多源聚合 / 高频更新',
        blurb: '独立热榜子应用已上线后会自动点亮入口，本地开发可直接联调。',
        status: '开发中',
        accessMode: '同窗口子应用',
        target: '/apps/news-dashboard',
        childAppPath: 'https://hellchenstar.github.io/news-dashboard-web/',
        childAppDevUrl: 'http://127.0.0.1:4175/news/dashboard/',
        cta: '进入热榜'
      }
    ]
  }
]

export function getSectionBySlug(slug) {
  return sections.find((section) => section.slug === slug)
}

export function getAppByKey(key) {
  for (const section of sections) {
    const item = section.items.find((entry) => entry.key === key)
    if (item) {
      return { ...item, sectionSlug: section.slug, sectionName: section.name, accent: section.accent }
    }
  }
  return null
}
