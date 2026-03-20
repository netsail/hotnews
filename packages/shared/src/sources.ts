import type { Source } from './types'

// 科技类内容源
export const techSources: Source[] = [
  {
    id: 'v2ex',
    name: 'V2EX',
    icon: 'https://www.v2ex.com/static/img/v2ex@2x.png',
    url: 'https://www.v2ex.com/api/topics/hot.json',
    type: 'api',
    category: 'tech',
    interval: 5,
    enabled: true
  },
  {
    id: '36kr',
    name: '36氪',
    icon: 'https://static.36krcnd.com/36kr-web/static/img/logo/logo_36kr.png',
    url: 'https://36kr.com/feed',
    type: 'rss',
    category: 'tech',
    interval: 10,
    enabled: true
  },
  {
    id: 'ithome',
    name: 'IT之家',
    icon: 'https://img.ithome.com/images/v3.1/logo.png',
    url: 'https://www.ithome.com/rss/',
    type: 'rss',
    category: 'tech',
    interval: 5,
    enabled: true
  },
  {
    id: 'infoq',
    name: 'InfoQ',
    icon: 'https://s3.amazonaws.com/infoq.content.live.638684/static/img/logo/logo-big.png',
    url: 'https://www.infoq.cn/feed',
    type: 'rss',
    category: 'tech',
    interval: 15,
    enabled: true
  },
  {
    id: 'sspai',
    name: '少数派',
    icon: 'https://cdn.sspai.com/logo/logo-red.svg',
    url: 'https://sspai.com/feed',
    type: 'rss',
    category: 'tech',
    interval: 20,
    enabled: true
  }
]

// 开发者内容源
export const devSources: Source[] = [
  {
    id: 'github-trending',
    name: 'GitHub Trending',
    icon: 'https://github.githubassets.com/favicons/favicon.svg',
    url: 'https://github.com/trending',
    type: 'crawler',
    category: 'dev',
    interval: 30,
    enabled: true
  },
  {
    id: 'hackernews',
    name: 'Hacker News',
    icon: 'https://news.ycombinator.com/favicon.ico',
    url: 'https://hacker-news.firebaseio.com/v0/topstories.json',
    type: 'api',
    category: 'dev',
    interval: 10,
    enabled: true
  },
  {
    id: 'juejin',
    name: '掘金',
    icon: 'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/favicon.ico',
    url: 'https://juejin.cn',
    type: 'crawler',
    category: 'dev',
    interval: 10,
    enabled: true
  }
]

// 财经类内容源
export const financeSources: Source[] = [
  {
    id: 'huxiu',
    name: '虎嗅',
    icon: 'https://www.huxiu.com/favicon.ico',
    url: 'https://www.huxiu.com/rss/0.xml',
    type: 'rss',
    category: 'finance',
    interval: 15,
    enabled: true
  },
  {
    id: 'tmtpost',
    name: '钛媒体',
    icon: 'https://www.tmtpost.com/favicon.ico',
    url: 'https://www.tmtpost.com/rss.xml',
    type: 'rss',
    category: 'finance',
    interval: 15,
    enabled: true
  }
]

// 生活类内容源
export const lifeSources: Source[] = [
  {
    id: 'zhihu',
    name: '知乎热榜',
    icon: 'https://static.zhihu.com/heifetz/favicon.ico',
    url: 'https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total',
    type: 'api',
    category: 'life',
    interval: 10,
    enabled: true
  },
  {
    id: 'weibo',
    name: '微博热搜',
    icon: 'https://weibo.com/favicon.ico',
    url: 'https://weibo.com/ajax/side/hotSearch',
    type: 'api',
    category: 'life',
    interval: 5,
    enabled: true
  }
]

// 所有内容源
export const allSources: Source[] = [
  ...techSources,
  ...devSources,
  ...financeSources,
  ...lifeSources
]

// 按分类获取内容源
export function getSourcesByCategory(category: string): Source[] {
  return allSources.filter(s => s.category === category && s.enabled !== false)
}

// 获取单个内容源
export function getSourceById(id: string): Source | undefined {
  return allSources.find(s => s.id === id)
}
