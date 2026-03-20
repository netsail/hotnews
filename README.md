# 🔥 HotNews - 个性化新闻聚合平台

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node](https://img.shields.io/badge/node-%3E%3D20.0.0-brightgreen.svg)](https://nodejs.org)
[![Vue](https://img.shields.io/badge/vue-3.4+-brightgreen.svg)](https://vuejs.org)

> **优雅的实时新闻聚合平台** - 独立设计、独立开发的开源项目

[在线演示](https://hotnews.example.com) | [设计文档](./docs/DESIGN.md) | [交互原型](./docs/prototype.html)

---

## ✨ 核心特性

- 🎨 **优雅的UI设计** - 现代化卡片式布局，极致阅读体验
- 🔄 **实时更新** - 持续抓取最新资讯，保证信息时效性
- 🔐 **多平台登录** - 支持 GitHub、Google OAuth 快速登录
- 📌 **个性化定制** - 关注感兴趣的内容源，打造专属首页
- 🔥 **智能推荐** - 基于热度和时间衰减的排序算法
- ⚡ **高性能** - Redis缓存 + 智能抓取间隔，毫秒级响应
- 🌐 **多源聚合** - 30+优质新闻源（科技、财经、国际、生活）
- 📱 **响应式设计** - 完美适配PC、平板、手机
- 🚀 **一键部署** - 支持 Docker、Cloudflare Pages、Vercel

---

## 📸 预览

### 桌面端

```
┌──────────────────────────────────────────────┐
│  🔥 HotNews   更多  关注  最热  实时    [登录] │
├──────────────────────────────────────────────┤
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────┐│
│ │  V2EX   │ │  36氪   │ │ IT之家  │ │ 虎嗅 ││
│ │  128条  │ │  86条   │ │  152条  │ │ 56条 ││
│ └─────────┘ └─────────┘ └─────────┘ └──────┘│
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌──────┐│
│ │ GitHub  │ │  知乎   │ │  掘金   │ │ 微博 ││
│ │  25个   │ │  50条   │ │  15篇   │ │ 50条 ││
│ └─────────┘ └─────────┘ └─────────┘ └──────┘│
└──────────────────────────────────────────────┘
```

### 移动端

```
┌─────────────────┐
│  🔥 HotNews  [≡]│
├─────────────────┤
│  更多  关注  ... │
├─────────────────┤
│  ┌───────────┐  │
│  │   V2EX    │  │
│  │  128条    │  │
│  └───────────┘  │
│  ┌───────────┐  │
│  │   36氪    │  │
│  │   86条    │  │
│  └───────────┘  │
└─────────────────┘
```

---

## 🎯 功能特性

### 导航系统

- **更多** - 全部分类和内容源
- **关注** - 个性化关注内容（需登录）
- **最热** - 热度排行榜
- **实时** - 最新发布动态

### 用户系统

- GitHub OAuth 登录
- Google OAuth 登录
- JWT Token 认证
- 用户资料管理

### 内容系统

- 30+优质新闻源
- RSS/API/爬虫三种抓取方式
- 智能抓取间隔（自适应防封禁）
- 内容去重算法
- 热度计算算法

### 个性化功能

- 关注内容源
- 文章收藏
- 阅读历史
- 个性化首页

---

## 🚀 快速开始

### 前置要求

- Node.js >= 20.0.0
- pnpm >= 8.0.0
- PostgreSQL >= 15（可选）
- Redis >= 7.0（可选）

### 安装

```bash
# 克隆仓库
git clone https://github.com/netsail/hotnews.git
cd hotnews

# 安装依赖
pnpm install

# 配置环境变量
cp .env.example .env
```

### 配置

编辑 `.env` 文件：

```bash
# GitHub OAuth
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

# JWT密钥（至少32位）
JWT_SECRET=your_random_jwt_secret_at_least_32_chars

# 数据库
DATABASE_URL=postgresql://localhost:5432/hotnews

# Redis
REDIS_URL=redis://localhost:6379

# 域名
BASE_URL=http://localhost:3000
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
- [设计文档](./docs/DESIGN.md) - 完整设计系统
- [设计资产](./docs/ASSETS.md) - Logo、图标、物料
- [交互原型](./docs/prototype.html) - 在线预览
- [API文档](./docs/api.md)
- [部署指南](./docs/deployment.md)
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

---

## 🏗️ 项目结构

```
hotnews/
├── apps/
│   ├── web/                 # 前端应用
│   │   ├── components/      # Vue组件
│   │   ├── pages/           # 页面路由
│   │   └── assets/          # 静态资源
│   └── server/              # 后端服务
│       ├── routes/          # API路由
│       ├── services/        # 业务逻辑
│       ├── crawlers/        # 爬虫模块
│       └── middleware/      # 中间件
├── packages/
│   └── shared/              # 共享类型
│       ├── types.ts         # 类型定义
│       └── sources.ts       # 内容源定义
├── docs/                    # 文档
└── scripts/                 # 脚本工具
```

---

## 🎨 设计系统

### 色彩

- **主色**: #3B82F6（蓝色）
- **成功**: #10B981（绿色）
- **警告**: #F59E0B（橙色）
- **错误**: #EF4444（红色）

### 字体

- **主字体**: -apple-system, PingFang SC
- **代码字体**: SF Mono, Monaco

### 响应式

- **手机**: <768px（1列卡片）
- **平板**: 768-1024px（2列卡片）
- **桌面**: >1024px（3-4列卡片）

---

## 📊 支持的内容源（30+）

### 科技类

- ✅ V2EX
- ✅ 36氪
- ✅ IT之家
- ✅ InfoQ
- ✅ 少数派

### 开发者

- ✅ GitHub Trending
- ✅ Hacker News
- ✅ 掘金

### 财经类

- ✅ 虎嗅
- ✅ 钛媒体

### 生活类

- ✅ 知乎热榜
- ✅ 微博热搜
- ✅ 豆瓣

---

## 🚀 部署

### Docker Compose（推荐）

```bash
# 一键启动
docker-compose up -d

# 包含服务：应用 + 数据库 + Redis + Nginx
```

### Cloudflare Pages

```bash
# 构建命令
pnpm build

# 输出目录
dist/output/public
```

### Vercel

```bash
# 一键部署
vercel
```

---

## 🤝 贡献

欢迎所有形式的贡献！请查看 [贡献指南](./CONTRIBUTING.md)

### 添加新内容源

1. 在 `packages/shared/src/sources.ts` 添加定义
2. 在 `apps/server/src/crawlers/` 实现爬虫
3. 提交 Pull Request

---

## 📄 License

[MIT](./LICENSE) © 2024 NetSail Team

---

## 📞 联系方式

- **GitHub**: https://github.com/netsail/hotnews
- **Issues**: https://github.com/netsail/hotnews/issues
- **Discussions**: https://github.com/netsail/hotnews/discussions

---

## 🙏 致谢

感谢以下开源项目：
- Vue.js
- Nuxt.js
- Express
- TailwindCSS
- Prisma
- 以及所有贡献者和用户

---

**⭐ 如果这个项目对你有帮助，请给一个 Star！**
