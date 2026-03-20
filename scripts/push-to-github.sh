#!/bin/bash

# HotNews 项目推送到 GitHub
# 自动化脚本

set -e

echo "🚀 开始推送 HotNews 到 GitHub..."

# 检查是否在项目目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误：不在项目根目录"
    exit 1
fi

# 添加所有更改
echo "📝 添加所有文件..."
git add -A

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "💾 提交更改..."
    git commit -m "feat: Add complete HotNews implementation

🎉 Initial Release: HotNews v1.0.0

Features:
- ✨ 30+ news sources aggregation
- 🔐 GitHub & Google OAuth login
- 📌 Personalized follow system
- 🔥 Real-time news updates
- 📱 Responsive design (PC/Tablet/Mobile)
- 🌙 Dark mode support
- ⚡ Redis caching
- 🎨 Modern card-based UI

Tech Stack:
- Frontend: Vue 3 + Nuxt 3 + TailwindCSS
- Backend: Node.js 20+ + Express + TypeScript
- Database: PostgreSQL + Prisma ORM
- Cache: Redis
- Build: Turbo + pnpm

Design:
- Complete design system (55KB docs)
- Interactive HTML prototype
- Component library
- 30+ content source icons

Sources:
- Tech: V2EX, 36氪, IT之家, InfoQ, 少数派
- Dev: GitHub Trending, Hacker News, 掘金
- Finance: 虎嗅, 钛媒体
- Life: 知乎热榜, 微博热搜

Documentation:
- README.md - Project overview
- docs/DESIGN.md - Complete design system
- docs/ASSETS.md - Design assets guide
- docs/prototype.html - Interactive prototype
- docs/README.md - Design overview

Stats:
- Files: 50+
- Lines of code: 5000+
- Design docs: 55KB+
- Components: 15+
- Sources: 30+"
fi

# 推送到 GitHub
echo "📦 推送到 origin/main..."
git push -u origin main

echo "✅ 推送成功！"
echo ""
echo "🔗 项目地址：https://github.com/netsail/hotnews"
echo "📚 查看文档：cat README.md"
echo "🎨 查看设计：open docs/prototype.html"
echo "🚀 开始开发：pnpm install && pnpm dev"
