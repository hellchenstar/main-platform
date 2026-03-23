export const sections = [
  {
    slug: 'games',
    name: '游戏',
    eyebrow: 'Play Hub',
    description: '聚合轻量游戏和独立小游戏项目，优先承载你已有的 H5 游戏。',
    accent: '#ff7a59',
    tone: '适合挂推箱子、竞速、塔防这类可独立部署的子应用。',
    highlights: ['轻量接入', '子路径部署', '平台统一入口'],
    items: [
      {
        key: 'sokoban',
        title: '推箱子',
        meta: '益智游戏 / 子应用 / 已接入',
        blurb: '已接入主应用跳转页。开发环境和正式环境都改为同窗口进入，稳定性更高。',
        status: '已接入',
        accessMode: '同窗口子应用',
        target: '/apps/sokoban',
        childAppPath: 'https://hellchenstar.github.io/sokoban-web/',
        childAppDevUrl: 'http://127.0.0.1:4173/games/sokoban/',
        cta: '进入项目'
      },
      {
        key: 'racing',
        title: '像素竞速',
        meta: '赛车游戏 / 子应用 / 排行玩法',
        blurb: '适合做独立项目部署，然后由平台统一收口和导流。',
        status: '规划中',
        accessMode: '子路径',
        target: '/games/racing/',
        cta: '查看方案'
      },
      {
        key: 'defense',
        title: '塔防实验室',
        meta: '策略游戏 / 子应用 / 活动扩展',
        blurb: '适合后面做成长体系、节日活动和推荐位联动。',
        status: '规划中',
        accessMode: '子路径',
        target: '/games/defense/',
        cta: '查看方案'
      }
    ]
  },
  {
    slug: 'ai-video',
    name: 'AI 视频',
    eyebrow: 'Video Lab',
    description: '聚合 AI 视频作品、工作流案例和生成工具方向的内容项目。',
    accent: '#1f9d8b',
    tone: '既能放作品，也能放创作工具和案例站。',
    highlights: ['作品展示', '模型标签', '内容聚合'],
    items: [
      {
        key: 'ai-video-cases',
        title: 'AI 视频案例库',
        meta: '内容站 / 视频聚合 / 案例沉淀',
        blurb: '适合作为独立内容子站，沉淀作品、模型、提示词和工作流。',
        status: '设计中',
        accessMode: '子路径',
        target: '/ai-video/cases/',
        cta: '查看案例'
      },
      {
        key: 'ai-video-inspirations',
        title: '风格灵感板',
        meta: '灵感库 / 标签分类 / 可扩展搜索',
        blurb: '可以拆成独立前端页面，后面接检索和收藏。',
        status: '规划中',
        accessMode: '子路径',
        target: '/ai-video/inspirations/',
        cta: '查看灵感'
      },
      {
        key: 'ai-video-tools',
        title: '生成工具导航',
        meta: '导航站 / 平台索引 / 外部资源',
        blurb: '这类既可以做平台内页，也可以后续接成独立子应用。',
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
    description: '聚合科技、行业、平台热榜和时效性强的热点追踪项目。',
    accent: '#3a6cf4',
    tone: '适合做热榜看板、事件时间线和来源聚合。',
    highlights: ['多源聚合', '热点追踪', '资讯看板'],
    items: [
      {
        key: 'news-dashboard',
        title: '实时热榜面板',
        meta: '热点看板 / 多源聚合 / 高频更新',
        blurb: '适合拆成独立子应用，后面接抓取服务和定时更新。',
        status: '规划中',
        accessMode: '子路径',
        target: '/news/dashboard/',
        cta: '查看热榜'
      },
      {
        key: 'frontend-weekly',
        title: '前端趋势周报',
        meta: '资讯栏目 / 周期更新 / 内容整理',
        blurb: '适合做成栏目型卡片流，后面可加摘要生成。',
        status: '策划中',
        accessMode: '平台页',
        target: '/section/news',
        cta: '查看周报'
      },
      {
        key: 'ai-briefing',
        title: 'AI 行业快讯',
        meta: '科技资讯 / 多标签 / 事件专题',
        blurb: '可以作为热点模块下的独立频道继续扩展。',
        status: '策划中',
        accessMode: '平台页',
        target: '/section/news',
        cta: '查看快讯'
      }
    ]
  },
  {
    slug: 'novels',
    name: '小说',
    eyebrow: 'Reading Room',
    description: '承载小说推荐、阅读器、分类页和书架类阅读子应用。',
    accent: '#9a5cff',
    tone: '适合做一个安静的阅读区，也适合后面做独立阅读器。',
    highlights: ['推荐书单', '阅读器预留', '书架扩展'],
    items: [
      {
        key: 'novel-recommendations',
        title: '小说推荐馆',
        meta: '内容页 / 书单推荐 / 分类浏览',
        blurb: '适合先做平台内页，后续再拆详情页和榜单页。',
        status: '进行中',
        accessMode: '平台页',
        target: '/section/novels',
        cta: '查看书单'
      },
      {
        key: 'novel-reader',
        title: '在线阅读器',
        meta: '阅读子应用 / 章节加载 / 进度同步',
        blurb: '建议单独做成子应用，后面可以复用到多个小说内容源。',
        status: '规划中',
        accessMode: '子路径',
        target: '/novels/reader/',
        cta: '查看阅读器'
      },
      {
        key: 'bookshelf',
        title: '个人书架',
        meta: '用户功能 / 收藏同步 / 历史记录',
        blurb: '适合等登录体系补上后再独立增强。',
        status: '待实现',
        accessMode: '平台页',
        target: '/section/novels',
        cta: '查看书架'
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
