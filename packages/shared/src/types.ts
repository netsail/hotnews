// 内容源类型定义
export interface Source {
  id: string
  name: string
  icon: string
  url: string
  type: 'rss' | 'api' | 'crawler'
  category: SourceCategory
  interval: number // 抓取间隔（分钟）
  enabled?: boolean
}

export type SourceCategory = 
  | 'tech'      // 科技
  | 'finance'   // 财经
  | 'global'    // 国际
  | 'dev'       // 开发者
  | 'life'      // 生活

// 文章类型定义
export interface Article {
  id: string
  sourceId: string
  title: string
  url: string
  summary?: string
  content?: string
  author?: string
  publishedAt: Date
  crawledAt: Date
  viewCount: number
  likeCount: number
  commentCount: number
  heatScore: number
  metadata?: Record<string, any>
}

// 用户类型定义
export interface User {
  id: string
  email: string
  username: string
  avatar: string
  githubId?: string
  googleId?: string
  createdAt: Date
  updatedAt: Date
}

// 用户关注
export interface UserFollow {
  id: string
  userId: string
  sourceId: string
  createdAt: Date
}

// 用户收藏
export interface UserFavorite {
  id: string
  userId: string
  articleId: string
  createdAt: Date
}

// 导航标签
export type NavTab = 'more' | 'follow' | 'hot' | 'latest'

// API 响应
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  message?: string
  timestamp?: number
}
