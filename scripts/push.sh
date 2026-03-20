#!/bin/bash

# HotNews 项目推送脚本
# 使用方法: ./scripts/push.sh

set -e

echo "🚀 开始推送 HotNews 项目到 GitHub..."

# 检查是否在项目目录
if [ ! -d ".git" ]; then
    echo "❌ 错误：当前目录不是 git 仓库"
    echo "请先运行: cd /tmp/hotnews"
    exit 1
fi

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现有未提交的更改"
    git add .
    git commit -m "feat: Add more project files

- Add backend server structure
- Add frontend app structure
- Add shared packages
- Add documentation"
fi

# 推送到 GitHub
echo "📦 推送到 origin/main..."
git push -u origin main

echo "✅ 推送成功！"
echo ""
echo "🔗 你的项目地址：https://github.com/netsail/hotnews"
echo "📚 查看文档：cat README.md"
echo "🚀 开始开发：pnpm dev"
