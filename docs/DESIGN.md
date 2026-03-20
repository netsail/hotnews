# HotNews 设计文档

## 📐 设计概览

**项目名称：** HotNews - 个性化新闻聚合平台  
**设计风格：** 现代简约 + 卡片式布局  
**主色调：** 蓝色系 (#3B82F6)  
**设计理念：** 信息密度高 + 阅读体验好 + 视觉舒适

---

## 🎨 设计系统

### 1. 色彩系统

```css
/* 主题色 */
--primary: #3B82F6;        /* 主蓝色 */
--primary-dark: #2563EB;   /* 深蓝色 */
--primary-light: #60A5FA;  /* 浅蓝色 */

/* 辅助色 */
--success: #10B981;        /* 成功绿 */
--warning: #F59E0B;        /* 警告橙 */
--danger: #EF4444;         /* 错误红 */
--info: #6366F1;           /* 信息紫 */

/* 中性色 */
--gray-50: #F9FAFB;        /* 背景灰 */
--gray-100: #F3F4F6;
--gray-200: #E5E7EB;
--gray-300: #D1D5DB;
--gray-400: #9CA3AF;
--gray-500: #6B7280;
--gray-600: #4B5563;
--gray-700: #374151;
--gray-800: #1F2937;       /* 文字深灰 */
--gray-900: #111827;

/* 内容源专属色 */
--v2ex: #333333;
--36kr: #0080FF;
--ithome: #D32F2F;
--github: #24292E;
--zhihu: #0066FF;
--weibo: #E6162D;
```

### 2. 字体系统

```css
/* 字体族 */
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 
             'Hiragino Sans GB', 'Microsoft YaHei', sans-serif;
--font-mono: 'SF Mono', 'Monaco', 'Inconsolata', 'Fira Mono', monospace;

/* 字体大小 */
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */

/* 字重 */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;

/* 行高 */
--leading-tight: 1.25;
--leading-normal: 1.5;
--leading-relaxed: 1.625;
```

### 3. 间距系统

```css
/* 间距比例 */
--spacing-0: 0;
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
```

### 4. 圆角系统

```css
--radius-sm: 0.25rem;   /* 4px */
--radius-md: 0.375rem;  /* 6px */
--radius-lg: 0.5rem;    /* 8px */
--radius-xl: 0.75rem;   /* 12px */
--radius-2xl: 1rem;     /* 16px */
--radius-full: 9999px;  /* 圆形 */
```

### 5. 阴影系统

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

---

## 📱 页面布局设计

### 1. 整体布局

```
┌──────────────────────────────────────────────────────┐
│  🔥 HotNews    更多  关注  最热  实时    [🔍] [登录]   │ ← 顶部导航栏 (64px)
├──────────────────────────────────────────────────────┤
│  [分类筛选]  [刷新]  [设置]                            │ ← 工具栏 (48px)
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │  V2EX   │  │  36氪   │  │ IT之家  │  │  虎嗅   │  │ ← 内容卡片区
│  │         │  │         │  │         │  │         │  │   (网格布局)
│  │  文章1  │  │  文章1  │  │  文章1  │  │  文章1  │  │
│  │  文章2  │  │  文章2  │  │  文章2  │  │  文章2  │  │
│  │  文章3  │  │  文章3  │  │  文章3  │  │  文章3  │  │
│  │  ...    │  │  ...    │  │  ...    │  │  ...    │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│                                                       │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐  │
│  │ GitHub  │  │  知乎   │  │  掘金   │  │  微博   │  │
│  │         │  │         │  │         │  │         │  │
│  │  文章1  │  │  热榜1  │  │  文章1  │  │  热搜1  │  │
│  │  文章2  │  │  热榜2  │  │  文章2  │  │  热搜2  │  │
│  │  文章3  │  │  热榜3  │  │  文章3  │  │  热搜3  │  │
│  │  ...    │  │  ...    │  │  ...    │  │  ...    │  │
│  └─────────┘  └─────────┘  └─────────┘  └─────────┘  │
│                                                       │
│                                                       │
│  [加载更多...]                                        │ ← 加载更多按钮
└──────────────────────────────────────────────────────┘
```

### 2. 响应式断点

```typescript
// 屏幕尺寸断点
const breakpoints = {
  sm: '640px',   // 手机
  md: '768px',   // 平板竖屏
  lg: '1024px',  // 平板横屏
  xl: '1280px',  // 桌面
  '2xl': '1536px' // 大屏
}

// 卡片列数配置
const gridColumns = {
  sm: 1,   // 手机：1列
  md: 2,   // 平板：2列
  lg: 3,   // 桌面：3列
  xl: 4,   // 大屏：4列
}
```

---

## 🧩 组件设计

### 1. 顶部导航栏

**尺寸：** 高度 64px  
**背景：** #FFFFFF (白色) + 阴影  
**布局：** Flexbox (space-between)

```html
┌──────────────────────────────────────────────────────┐
│  🔥 HotNews                                       [👤]│
│                                                       │
│  更多  关注  最热  实时              [🔍]  [登录]     │
└──────────────────────────────────────────────────────┘
```

**组件代码：**
```vue
<template>
  <header class="nav-header">
    <div class="nav-brand">
      <h1>🔥 HotNews</h1>
    </div>
    
    <nav class="nav-tabs">
      <button>更多</button>
      <button>关注</button>
      <button class="active">最热</button>
      <button>实时</button>
    </nav>
    
    <div class="nav-actions">
      <button class="search-btn">🔍</button>
      <button class="login-btn">登录</button>
    </div>
  </header>
</template>

<style scoped>
.nav-header {
  height: 64px;
  background: white;
  box-shadow: var(--shadow-md);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-tabs button {
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 6px;
  transition: all 0.2s;
}

.nav-tabs button.active {
  background: var(--primary);
  color: white;
}
</style>
```

---

### 2. 内容卡片

**尺寸：** 最小高度 320px  
**背景：** #FFFFFF  
**圆角：** 8px  
**阴影：** shadow-md

```html
┌───────────────────────────────┐
│ 🔵 V2EX                  5分钟前│ ← 头部
├───────────────────────────────┤
│ • Python 3.12 发布，性能提升30% │
│   41分钟前 · 128条评论          │ ← 文章列表
│                                │
│ • 求推荐靠谱的云服务器          │
│   2小时前 · 56条评论            │
│                                │
│ • 分享我的远程工作经验          │
│   3小时前 · 89条评论            │
│                                │
│ • ...                          │
├───────────────────────────────┤
│   [⭐ 关注]  [🔄 刷新]  [📋 更多]│ ← 底部操作
└───────────────────────────────┘
```

**组件代码：**
```vue
<template>
  <div class="source-card">
    <div class="card-header">
      <img :src="source.icon" :alt="source.name" class="source-icon" />
      <h3 class="source-name">{{ source.name }}</h3>
      <span class="update-time">{{ formatTime(source.updatedAt) }}</span>
    </div>
    
    <div class="card-body">
      <div 
        v-for="article in articles" 
        :key="article.id"
        class="article-item"
        @click="openArticle(article)"
      >
        <div class="article-title">{{ article.title }}</div>
        <div class="article-meta">
          <span>{{ formatTime(article.publishedAt) }}</span>
          <span v-if="article.commentCount">· {{ article.commentCount }}条评论</span>
          <span v-if="article.viewCount">· {{ formatNumber(article.viewCount) }}阅读</span>
        </div>
      </div>
    </div>
    
    <div class="card-footer">
      <button @click="toggleFollow" :class="{ followed: isFollowed }">
        {{ isFollowed ? '★ 已关注' : '☆ 关注' }}
      </button>
      <button @click="refresh">🔄 刷新</button>
      <button @click="viewMore">查看更多 →</button>
    </div>
  </div>
</template>

<style scoped>
.source-card {
  background: white;
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  min-height: 320px;
  display: flex;
  flex-direction: column;
  transition: all 0.2s;
}

.source-card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.card-header {
  padding: 16px;
  border-bottom: 1px solid var(--gray-200);
  display: flex;
  align-items: center;
  gap: 12px;
}

.source-icon {
  width: 32px;
  height: 32px;
  border-radius: 6px;
}

.source-name {
  flex: 1;
  font-size: 16px;
  font-weight: 600;
}

.update-time {
  font-size: 12px;
  color: var(--gray-500);
}

.article-item {
  padding: 12px 16px;
  border-bottom: 1px solid var(--gray-100);
  cursor: pointer;
  transition: background 0.2s;
}

.article-item:hover {
  background: var(--gray-50);
}

.article-title {
  font-size: 14px;
  color: var(--gray-800);
  line-height: 1.5;
  margin-bottom: 4px;
}

.article-meta {
  font-size: 12px;
  color: var(--gray-500);
}

.card-footer {
  padding: 12px 16px;
  border-top: 1px solid var(--gray-200);
  display: flex;
  gap: 8px;
}

.card-footer button {
  padding: 6px 12px;
  font-size: 13px;
  border-radius: 4px;
  background: var(--gray-100);
  transition: all 0.2s;
}

.card-footer button.followed {
  background: var(--primary);
  color: white;
}
</style>
```

---

### 3. 登录按钮

```vue
<template>
  <div class="login-buttons">
    <button class="btn-github" @click="loginWithGitHub">
      <svg>...</svg>
      GitHub 登录
    </button>
    
    <button class="btn-google" @click="loginWithGoogle">
      <svg>...</svg>
      Google 登录
    </button>
  </div>
</template>

<style scoped>
.login-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 240px;
}

.btn-github, .btn-google {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  border-radius: 8px;
  transition: all 0.2s;
}

.btn-github {
  background: #24292E;
  color: white;
}

.btn-github:hover {
  background: #1A1E22;
}

.btn-google {
  background: white;
  border: 1px solid var(--gray-300);
  color: var(--gray-700);
}

.btn-google:hover {
  background: var(--gray-50);
}
</style>
```

---

## 🎭 交互设计

### 1. 加载状态

```vue
<template>
  <div class="loading-skeleton">
    <div class="skeleton-card">
      <div class="skeleton-header"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line"></div>
      <div class="skeleton-line short"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton-card {
  background: white;
  border-radius: 8px;
  padding: 16px;
}

.skeleton-header,
.skeleton-line {
  background: linear-gradient(
    90deg,
    var(--gray-200) 25%,
    var(--gray-100) 50%,
    var(--gray-200) 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
  border-radius: 4px;
}

.skeleton-header {
  height: 32px;
  margin-bottom: 16px;
}

.skeleton-line {
  height: 16px;
  margin-bottom: 8px;
}

.skeleton-line.short {
  width: 60%;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
```

### 2. 空状态

```vue
<template>
  <div class="empty-state">
    <div class="empty-icon">📭</div>
    <h3>暂无内容</h3>
    <p>这里还没有任何文章</p>
    <button @click="refresh">刷新试试</button>
  </div>
</template>

<style scoped>
.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 48px;
  color: var(--gray-500);
}

.empty-icon {
  font-size: 64px;
  margin-bottom: 16px;
}

.empty-state h3 {
  font-size: 18px;
  margin-bottom: 8px;
  color: var(--gray-700);
}

.empty-state p {
  font-size: 14px;
  margin-bottom: 24px;
}

.empty-state button {
  padding: 10px 24px;
  background: var(--primary);
  color: white;
  border-radius: 6px;
}
</style>
```

### 3. 错误状态

```vue
<template>
  <div class="error-state">
    <div class="error-icon">⚠️</div>
    <h3>加载失败</h3>
    <p>{{ errorMessage }}</p>
    <button @click="retry">重试</button>
  </div>
</template>
```

---

## 🌈 动画效果

### 1. 页面过渡

```css
/* 页面切换动画 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
```

### 2. 卡片进入动画

```css
/* 卡片渐入 */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.source-card {
  animation: fadeInUp 0.5s ease forwards;
}

.source-card:nth-child(1) { animation-delay: 0.1s; }
.source-card:nth-child(2) { animation-delay: 0.2s; }
.source-card:nth-child(3) { animation-delay: 0.3s; }
.source-card:nth-child(4) { animation-delay: 0.4s; }
```

### 3. 按钮反馈

```css
/* 按钮点击效果 */
button:active {
  transform: scale(0.95);
}

/* 悬停效果 */
button:hover {
  box-shadow: var(--shadow-md);
}
```

---

## 📐 图标设计

### 1. 内容源图标

**尺寸：** 32x32px  
**格式：** PNG/SVG  
**风格：** 圆角方形

```
┌──────────────┐
│              │
│    🔵 V2EX   │
│              │
└──────────────┘
```

### 2. 功能图标

使用 **Heroicons** 或 **Lucide Icons**

```typescript
// 常用图标
import { 
  Search,      // 搜索
  Refresh,     // 刷新
  Settings,    // 设置
  Star,        // 收藏
  Heart,       // 喜欢
  Share2,      // 分享
  Clock,       // 时间
  TrendingUp,  // 热度
  Zap,         // 实时
  Menu,        // 菜单
  X            // 关闭
} from 'lucide-vue-next'
```

---

## 🎨 设计资源

### 设计稿下载

- **Figma:** [在线设计稿](https://figma.com/hotnews)
- **Sketch:** [下载 Sketch 文件](./assets/hotnews.sketch)
- **Framer:** [交互原型](https://framer.com/hotnews)

### UI Kit

- **组件库:** `@hotnews/ui` (待发布)
- **设计令牌:** `packages/shared/src/tokens.ts`
- **样式指南:** [Style Guide](./STYLE_GUIDE.md)

---

## 📱 移动端适配

### 1. 手机端布局 (<768px)

```
┌─────────────────┐
│  🔥 HotNews  [≡]│ ← 汉堡菜单
├─────────────────┤
│  更多  关注  ... │ ← 横向滚动
├─────────────────┤
│                 │
│  ┌───────────┐  │
│  │   V2EX    │  │ ← 单列卡片
│  │           │  │
│  │  文章1    │  │
│  │  文章2    │  │
│  └───────────┘  │
│                 │
│  ┌───────────┐  │
│  │   36氪    │  │
│  │           │  │
│  │  文章1    │  │
│  │  文章2    │  │
│  └───────────┘  │
│                 │
└─────────────────┘
```

### 2. 触摸手势

- **下拉刷新:** 更新所有内容源
- **上拉加载:** 加载更多文章
- **左滑卡片:** 快速收藏/分享
- **长按文章:** 显示操作菜单

---

## ✅ 设计检查清单

### 可用性

- [x] 色彩对比度符合 WCAG AA 标准
- [x] 字体大小不小于 12px
- [x] 点击区域不小于 44x44px
- [x] 键盘导航支持
- [x] 屏幕阅读器支持

### 性能

- [x] 首屏加载 < 2秒
- [x] 图片懒加载
- [x] 虚拟滚动（长列表）
- [x] 防抖/节流优化

### 兼容性

- [x] Chrome 90+
- [x] Firefox 88+
- [x] Safari 14+
- [x] Edge 90+
- [x] iOS Safari
- [x] Android Chrome

---

## 📝 设计更新日志

### v1.0.0 (2024-03-20)
- ✅ 初始设计系统
- ✅ 核心组件设计
- ✅ 响应式布局
- ✅ 交互动画

---

**设计团队：** HotNews Design Team  
**最后更新：** 2024-03-20
