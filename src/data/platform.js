export const sections = [
  {
    slug: 'games',
    name: '游戏',
    eyebrow: 'Play Hub',
    description: '收录轻量游戏与独立小游戏项目，统一从平台入口进入。',
    accent: '#ff7a59',
    tone: '面向可独立部署的轻量游戏内容，适合持续扩展。',
    highlights: ['轻量游戏', '独立部署', '统一入口'],
    items: [
      {
        key: 'sokoban',
        title: '推箱子',
        meta: '益智游戏 / 子应用 / 已接入',
        blurb: '已上线的经典推箱子玩法，支持直接进入体验。',
        status: '已接入',
        accessMode: '同窗口子应用',
        target: '/apps/sokoban',
        childAppPath: 'https://hellchenstar.github.io/sokoban-web/',
        childAppDevUrl: 'http://127.0.0.1:4173/games/sokoban/',
        cta: '立即进入'
      },
      {
        key: 'racing',
        title: '像素竞速',
        meta: '赛车游戏 / 子应用 / 排行玩法',
        blurb: '预留竞速玩法入口，适合后续扩展排行榜和活动内容。',
        status: '规划中',
        accessMode: '子路径',
        target: '/games/racing/',
        cta: '查看详情'
      },
      {
        key: 'defense',
        title: '塔防实验室',
        meta: '策略游戏 / 子应用 / 活动扩展',
        blurb: '预留策略与活动型玩法入口，便于后续持续扩展。',
        status: '规划中',
        accessMode: '子路径',
        target: '/games/defense/',
        cta: '查看详情'
      }
    ]
  },
  {
    slug: 'ai-video',
    name: 'AI 视频',
    eyebrow: 'Video Lab',
    description: '聚合 AI 视频案例、灵感内容与生成工具相关专题。',
    accent: '#1f9d8b',
    tone: '围绕创作案例、素材灵感和工具导航持续更新。',
    highlights: ['案例内容', '灵感专题', '工具导航'],
    items: [
      {
        key: 'ai-video-cases',
        title: 'AI 视频案例库',
        meta: '内容站 / 视频聚合 / 案例沉淀',
        blurb: '汇总 AI 视频案例与工作流内容，适合作为专题入口。',
        status: '设计中',
        accessMode: '子路径',
        target: '/ai-video/cases/',
        cta: '查看专题'
      },
      {
        key: 'ai-video-inspirations',
        title: '风格灵感板',
        meta: '灵感库 / 标签分类 / 可扩展搜索',
        blurb: '沉淀风格参考与创作灵感，便于后续做分类检索。',
        status: '规划中',
        accessMode: '子路径',
        target: '/ai-video/inspirations/',
        cta: '查看专题'
      },
      {
        key: 'ai-video-tools',
        title: '生成工具导航',
        meta: '导航站 / 平台索引 / 外部资源',
        blurb: '集中整理常用工具与服务入口，方便快速跳转。',
        status: '规划中',
        accessMode: '平台页',
        target: '/section/ai-video',
        cta: '查看工具'
      }
    ]
  },
  {
    slug: 'news',
    name: '最新热点',
    eyebrow: 'Hot Tracker',
    description: '聚合 AI 与科技热点、快讯栏目和高频更新内容。',
    accent: '#3a6cf4',
    tone: '适合承载热榜、日报、快讯和事件追踪类内容。',
    highlights: ['热点快讯', '日报更新', '专题追踪'],
    items: [
      {
        key: 'news-dashboard',
        title: '实时热榜面板',
        meta: '热点看板 / 多源聚合 / 高频更新',
        blurb: '预留高频热榜与多源聚合内容入口。',
        status: '规划中',
        accessMode: '子路径',
        target: '/news/dashboard/',
        cta: '查看热榜'
      },
      {
        key: 'frontend-weekly',
        title: '前端趋势周报',
        meta: '资讯栏目 / 周期更新 / 内容整理',
        blurb: '用于承载周期性趋势内容与精选整理。',
        status: '策划中',
        accessMode: '平台页',
        target: '/section/news',
        cta: '查看栏目'
      },
      {
        key: 'ai-briefing',
        title: 'AI 行业快讯',
        meta: '科技资讯 / 子应用 / 已接入',
        blurb: '独立 AI 资讯子应用，按日报与突发更新方式持续发布内容。',
        status: '已接入',
        accessMode: '同窗口子应用',
        target: '/apps/ai-briefing',
        childAppPath: 'https://hellchenstar.github.io/ai-briefing-web/',
        childAppDevUrl: 'http://127.0.0.1:4174/news/ai-briefing/',
        cta: '查看快讯'
      }
    ]
  },
  {
    slug: 'novels',
    name: '小说',
    eyebrow: 'Reading Room',
    description: '承载小说推荐、阅读器与书架相关阅读内容入口。',
    accent: '#9a5cff',
    tone: '面向阅读场景的内容分发入口，适合继续扩成完整阅读区。',
    highlights: ['推荐内容', '阅读入口', '书架能力'],
    items: [
      {
        key: 'novel-recommendations',
        title: '小说推荐馆',
        meta: '内容页 / 书单推荐 / 分类浏览',
        blurb: '用于承载书单内容、分类浏览与专题推荐。',
        status: '进行中',
        accessMode: '平台页',
        target: '/section/novels',
        cta: '查看书单'
      },
      {
        key: 'novel-reader',
        title: '在线阅读器',
        meta: '阅读子应用 / 章节加载 / 进度同步',
        blurb: '预留独立阅读器入口，便于后续接入多内容源。',
        status: '规划中',
        accessMode: '子路径',
        target: '/novels/reader/',
        cta: '查看入口'
      },
      {
        key: 'bookshelf',
        title: '个人书架',
        meta: '用户功能 / 收藏同步 / 历史记录',
        blurb: '预留用户书架与历史记录等阅读能力。',
        status: '待实现',
        accessMode: '平台页',
        target: '/section/novels',
        cta: '查看功能'
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
