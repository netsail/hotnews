# HotNews 设计资源

## 📦 设计物料清单

### 1. Logo 设计

**主Logo:**
```
🔥 HotNews
```

**设计规范:**
- **图标:** 🔥 火焰 emoji 或自定义火焰图形
- **字体:** SF Pro Display / PingFang SC
- **字重:** Bold (700)
- **颜色:** #3B82F6 (主蓝色)
- **尺寸:** 
  - 水平布局: 180x48px
  - 垂直布局: 120x120px

**变体:**
- 完整版: `🔥 HotNews`
- 简化版: `🔥`
- 深色模式: 白色火焰 + 白色文字

---

### 2. Favicon

**尺寸:**
- 16x16px (浏览器标签)
- 32x32px (书签栏)
- 180x180px (Apple Touch Icon)
- 192x192px (Android)
- 512x512px (PWA启动图标)

**设计:**
```
┌──────────────┐
│      🔥      │
│              │
│   HotNews    │
└──────────────┘

简化版:
┌──────────┐
│    🔥    │
└──────────┘
```

---

### 3. 内容源图标

**设计规范:**
- **尺寸:** 32x32px
- **圆角:** 6px
- **背景:** 白色或透明
- **格式:** PNG + SVG

**图标列表:**

| 内容源 | 主色 | 图标 |
|--------|------|------|
| V2EX | #333333 | `v2ex.png` |
| 36氪 | #0080FF | `36kr.png` |
| IT之家 | #D32F2F | `ithome.png` |
| GitHub | #24292E | `github.png` |
| 知乎 | #0066FF | `zhihu.png` |
| 微博 | #E6162D | `weibo.png` |

---

### 4. 社交媒体卡片

**Open Graph / Twitter Card:**

**尺寸:** 1200x630px

**设计模板:**
```
┌──────────────────────────────────────┐
│                                      │
│              🔥 HotNews              │
│                                      │
│    个性化新闻聚合平台                   │
│                                      │
│    • 多源聚合  • 实时更新  • 个性定制   │
│                                      │
│                                      │
└──────────────────────────────────────┘
```

**设计元素:**
- 背景: 渐变蓝色 (#3B82F6 → #2563EB)
- Logo: 居中，白色，120px
- 标题: 白色，48px，粗体
- 描述: 白色，24px
- 特性列表: 白色，18px

---

### 5. 宣传图片

**首页截图:**

**尺寸:** 1920x1080px

**设计:**
- 展示实际界面（深色/浅色主题）
- 添加设备边框（MacBook Pro）
- 渐变背景
- 添加光效和阴影

**手机截图:**

**尺寸:** 390x844px (iPhone 14 Pro)

**设计:**
- 展示移动端界面
- 手机边框
- 渐变背景

---

### 6. 营销Banner

**GitHub README Banner:**

**尺寸:** 1280x650px

**设计:**
```
┌──────────────────────────────────────────┐
│                                          │
│     🔥 HotNews                           │
│                                          │
│     个性化新闻聚合平台                     │
│                                          │
│     [立即体验]  [查看文档]                │
│                                          │
└──────────────────────────────────────────┘
```

---

### 7. 组件设计规范

**按钮:**

```
┌──────────────────────┐
│   Primary Button     │  主按钮（蓝色）
└──────────────────────┘

┌──────────────────────┐
│   Secondary Button   │  次按钮（灰色边框）
└──────────────────────┘

┌──────────────────────┐
│   Danger Button      │  危险按钮（红色）
└──────────────────────┘
```

**卡片:**

```
┌────────────────────────────┐
│  📰 V2EX        5分钟前     │  标题栏
├────────────────────────────┤
│  • 文章标题1                │
│    41分钟前 · 128条评论      │
│                            │
│  • 文章标题2                │
│    2小时前 · 56条评论        │
│                            │
│  • 文章标题3                │
│    3小时前 · 89条评论        │
├────────────────────────────┤
│  [⭐ 关注]  [🔄 刷新]       │  操作栏
└────────────────────────────┘
```

**表单:**

```
┌────────────────────────────┐
│  邮箱                       │
│  ┌────────────────────────┐│
│  │ email@example.com      ││  输入框
│  └────────────────────────┘│
│                            │
│  密码                       │
│  ┌────────────────────────┐│
│  │ ••••••••               ││  密码框
│  └────────────────────────┘│
│                            │
│  [✓] 记住我                 │  复选框
│                            │
│  ┌────────────────────────┐│
│  │      登 录              ││  提交按钮
│  └────────────────────────┘│
└────────────────────────────┘
```

---

### 8. 插画设计

**空状态插画:**

**场景1: 无关注内容**
- 图标: 📭 空邮箱
- 颜色: 灰色调
- 尺寸: 200x200px

**场景2: 无搜索结果**
- 图标: 🔍 放大镜 + 问号
- 颜色: 灰色调
- 尺寸: 200x200px

**场景3: 加载中**
- 图标: 🔄 旋转加载动画
- 颜色: 蓝色渐变
- 尺寸: 100x100px

---

### 9. 动画设计

**Logo动画:**
```
帧1: 🔥 (静止)
帧2: 🔥 (火焰放大 110%)
帧3: 🔥 (火焰缩小 90%)
帧4: 🔥 (火焰放大 105%)
帧5: 🔥 (静止)

时长: 1.5秒
缓动: ease-in-out
```

**刷新动画:**
```
帧1: 🔄 0°
帧2: 🔄 90°
帧3: 🔄 180°
帧4: 🔄 270°
帧5: 🔄 360°

时长: 1秒
循环: infinite
缓动: linear
```

**下拉动画:**
```
开始: opacity: 0, translateY: -20px
结束: opacity: 1, translateY: 0

时长: 0.3秒
缓动: ease-out
```

---

### 10. 深色模式

**配色方案:**

```css
/* 深色模式 */
--dark-bg-primary: #0F172A;
--dark-bg-secondary: #1E293B;
--dark-bg-tertiary: #334155;
--dark-text-primary: #F1F5F9;
--dark-text-secondary: #CBD5E1;
--dark-text-muted: #94A3B8;
--dark-border: #475569;
```

**切换动画:**

```css
/* 主题切换过渡 */
* {
  transition: background-color 0.3s ease, 
              color 0.3s ease,
              border-color 0.3s ease;
}
```

---

## 🛠️ 设计工具

### 推荐工具

1. **Figma** - UI设计
   - 在线协作
   - 组件库
   - 原型制作

2. **Sketch** - macOS UI设计
   - 本地设计
   - 插件生态

3. **Adobe XD** - 交互设计
   - 原型动画
   - 语音原型

4. **Framer** - 高保真原型
   - 代码导出
   - 真实交互

---

## 📐 设计规范文件

### TailwindCSS 配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6',
          dark: '#2563EB',
          light: '#60A5FA',
        },
        v2ex: '#333333',
        '36kr': '#0080FF',
        ithome: '#D32F2F',
        github: '#24292E',
        zhihu: '#0066FF',
        weibo: '#E6162D',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'PingFang SC'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
```

### CSS 变量

```css
/* styles/variables.css */
:root {
  /* 颜色 */
  --color-primary: #3B82F6;
  --color-success: #10B981;
  --color-warning: #F59E0B;
  --color-danger: #EF4444;
  
  /* 字体 */
  --font-sans: -apple-system, BlinkMacSystemFont, 'PingFang SC';
  --font-mono: 'SF Mono', Monaco, 'Inconsolata';
  
  /* 间距 */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* 圆角 */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;
  
  /* 阴影 */
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

---

## 📁 文件组织

```
assets/
├── images/
│   ├── logo/
│   │   ├── logo-full.png
│   │   ├── logo-icon.png
│   │   ├── logo-dark.png
│   │   └── logo.svg
│   ├── icons/
│   │   ├── v2ex.png
│   │   ├── 36kr.png
│   │   ├── ithome.png
│   │   ├── github.png
│   │   └── ... (30+)
│   ├── social/
│   │   ├── og-image.png
│   │   ├── twitter-card.png
│   │   └── github-banner.png
│   ├── illustrations/
│   │   ├── empty-state.svg
│   │   ├── error-state.svg
│   │   └── loading.svg
│   └── screenshots/
│       ├── desktop.png
│       ├── mobile.png
│       └── tablet.png
├── fonts/
│   ├── Inter.woff2
│   └── PingFang.woff2
└── favicon/
    ├── favicon.ico
    ├── favicon-16x16.png
    ├── favicon-32x32.png
    ├── apple-touch-icon.png
    └── android-chrome-512x512.png
```

---

## ✅ 设计检查清单

### 视觉设计

- [x] Logo设计完成
- [x] 配色系统定义
- [x] 字体系统定义
- [x] 图标库建立
- [x] 组件样式规范

### 用户体验

- [x] 响应式设计
- [x] 深色模式支持
- [x] 无障碍设计
- [x] 加载状态设计
- [x] 错误状态设计

### 性能优化

- [x] 图片压缩
- [x] SVG优化
- [x] 懒加载设计
- [x] 动画性能优化

---

**设计负责人:** HotNews Design Team  
**最后更新:** 2024-03-20  
**版本:** v1.0.0
