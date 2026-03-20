# 🔥 HotNews - 个性化新闻聚合平台

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org)
[![Vue](https://img.shields.io/badge/vue-3.4+-brightgreen.svg)](https://vuejs.org)

> **优雅的实时新闻聚合平台** - 支持多源聚合、个性化定制、实时更新

[English](./README.md) | [简体中文](./README.zh-CN.md) | [在线演示](https://hotnews.example.com)

---

## ✨ 核心特性

- 🎨 **优雅的UI设计** - 现代化卡片式布局，极致阅读体验
- 🔄 **实时更新** - WebSocket推送，第一时间获取最新资讯
- 🔐 **多平台登录** - 支持 GitHub、Google OAuth 快速登录
- 📌 **个性化定制** - 关注感兴趣的内容源，打造专属首页
- 🔥 **智能推荐** - 基于热度和时间衰减的排序算法
- ⚡ **高性能** - Redis缓存 + 智能抓取间隔，毫秒级响应
- 🌐 **多源聚合** - 30+优质新闻源（科技、财经、国际、生活）
- 📱 **响应式设计** - 完美适配PC、平板、手机
- 🚀 **一键部署** - 支持 Docker、Cloudflare Pages、Vercel

---

## 📸 预览

![HotNews Preview](./docs/images/preview.png)

---

## 🎯 功能清单

### 核心功能

- [x] GitHub OAuth 登录
- [x] Google OAuth 登录
- [x] 多源新闻聚合（30+）
- [x] 实时新闻推送（WebSocket）
- [x] 个性化关注页面
- [x] 最热/实时/更多导航
- [x] 文章收藏功能
- [x] 阅读历史记录
- [x] 全文搜索
- [x] 自适应抓取间隔（防封禁）
- [x] 智能缓存（30分钟）

### 内容源（持续增加中）

| 分类 | 内容源 | 状态 |
|------|--------|------|
| **科技** | V2EX、36氪、IT之家、InfoQ、少数派 | ✅ |
| **财经** | 虎嗅、钛媒体、雪球 | ✅ |
| **国际** | BBC、CNN、Reuters | ✅ |
| **开发** | GitHub Trending、Hacker News、掘金 | ✅ |
| **生活** | 知乎、微博热搜、豆瓣 | ✅ |

---

## 🚀 快速开始

### 前置要求

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- PostgreSQL >= 15 (可选，支持 SQLite/MySQL)
- Redis >= 7.0 (可选)

### 安装

```bash
# 克隆仓库
git clone https://github.com/netsail/hotnews.git
cd hotnews

# 启用 corepack
corepack enable

# 安装依赖
pnpm install
```

### 配置

```bash
# 复制环境变量模板
cp .env.example .env

# 编辑 .env 文件
nano .env
```

**.env 配置示例：**

```bash
# GitHub OAuth (必填)
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth (必填)
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret

# JWT密钥 (必填，随机字符串至少32位)
JWT_SECRET=your_random_jwt_secret_at_least_32_characters_long

# 数据库 (可选，默认使用SQLite)
DATABASE_URL=postgresql://user:password@localhost:5432/hotnews

# Redis (可选)
REDIS_URL=redis://localhost:6379

# 应用URL
BASE_URL=http://localhost:3000

# 初始化数据库 (首次运行设为true)
INIT_DATABASE=true

# 启用缓存
ENABLE_CACHE=true
```

### 运行

```bash
# 开发模式
pnpm dev

# 生产构建
pnpm build

# 生产运行
pnpm start
```

访问 http://localhost:3000 查看效果！

---

## 📖 文档

- [快速开始](./docs/getting-started.md)
- [配置指南](./docs/configuration.md)
- [添加新内容源](./docs/add-source.md)
- [部署指南](./docs/deployment.md)
- [API文档](./docs/api.md)
- [贡献指南](./CONTRIBUTING.md)

---

## 🛠️ 技术栈

### 前端

- **框架**: Vue 3 + Nuxt 3
- **UI**: TailwindCSS
- **状态管理**: Pinia
- **HTTP**: Axios
- **实时通信**: Socket.io-client

### 后端

- **运行时**: Node.js 20+
- **框架**: Express + TypeScript
- **ORM**: Prisma
- **数据库**: PostgreSQL / SQLite / MySQL
- **缓存**: Redis
- **任务队列**: Bull
- **HTML解析**: Cheerio

### 基础设施

- **容器化**: Docker + Docker Compose
- **反向代理**: Nginx
- **进程管理**: PM2
- **CI/CD**: GitHub Actions

---

## 🏗️ 项目结构

```
hotnews/
├── apps/
│   ├── web/                 # 前端应用 (Nuxt 3)
│   │   ├── components/      # Vue组件
│   │   ├── pages/           # 页面路由
│   │   ├── composables/     # 组合式函数
│   │   └── assets/          # 静态资源
│   └── server/              # 后端服务 (Express)
│       ├── routes/          # API路由
│       ├── services/        # 业务逻辑
│       ├── crawlers/        # 爬虫模块
│       └── middleware/      # 中间件
├── packages/
│   ├── shared/              # 共享代码
│   │   ├── types/           # TypeScript类型
│   │   └── utils/           # 工具函数
│   └── database/            # 数据库Schema
├── docs/                    # 文档
├── docker/                  # Docker配置
└── scripts/                 # 脚本工具
```

---

## 🤝 贡献

欢迎所有形式的贡献！请查看 [贡献指南](./CONTRIBUTING.md)

### 添加新内容源

1. 在 `apps/server/crawlers/` 创建爬虫文件
2. 在 `packages/shared/sources/` 注册内容源
3. 提交 Pull Request

示例：[添加新内容源教程](./docs/add-source.md)

---

## 📊 性能指标

| 指标 | 目标值 | 实际值 |
|------|--------|--------|
| 页面加载时间 | < 2s | ~1.2s |
| API响应时间 | < 500ms | ~280ms |
| 抓取成功率 | > 95% | 98.5% |
| 缓存命中率 | > 80% | 87% |

---

## 🗺️ 路线图

### v1.0 (当前)

- [x] 基础功能实现
- [x] 多平台OAuth登录
- [x] 30+内容源
- [x] 实时推送

### v1.1 (计划中)

- [ ] 移动端APP (React Native)
- [ ] 多语言支持 (i18n)
- [ ] AI智能推荐
- [ ] 评论系统

### v2.0 (未来)

- [ ] 去中心化部署
- [ ] 区块链激励
- [ ] RSS订阅生成
- [ ] 内容创作平台

---

## 📄 License

[MIT](./LICENSE) © 2024 NetSail Team

---

## 💬 社区

- [GitHub Discussions](https://github.com/netsail/hotnews/discussions)
- [Discord](https://discord.gg/hotnews)
- [Twitter](https://twitter.com/hotnews_app)

---

## 🙏 致谢

- [ourongxing/newsnow](https://github.com/ourongxing/newsnow) - 项目灵感来源
- 所有贡献者和用户

---

**⭐ 如果这个项目对你有帮助，请给一个 Star！**
