---
theme: ./
defaults:
  layout: portrait
---

# @code-sugar/slidev-theme-portrait

一个用于录制纵向视频的 Slidev 主题。

<div class="pt-12">

- 🔑 安装
- 🔧 配置
- 📐 辅助线
- 👨‍💻 Shiki
- 🍪 变量
- 🎨 布局

</div>

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    点击<kbd>Space</kbd>前往下一页<div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---

# 安装

在 `slides.md` 中添加主题配置，启动 Slidev 后，它会自动提示你安装主题。

```md
---
theme: @code-sugar/slidev-theme-portrait
defaults:
  layout: portrait
---
```

更多关于如何使用主题的信息，请参阅 [如何使用主题](https://sli.dev/guide/theme-addon#use-theme)。

---

# 配置

此主题重写了以下配置：

```json5
{
  slidev: {
    // 主题支持亮色和暗色两种模式
    colorSchema: "both",
    defaults: {
      // 默认比例（纵向）
      aspectRatio: "9/16",
      // 默认宽度
      canvasWidth: 720,
      // 禁用代码复制
      codeCopy: false,
      fonts: {
        sans: "Nunito Sans",
        // 代码字体使用 Fira Code
        mono: "Fira Code",
      },
    },
  },
}
```

---

# 辅助线

> [!WARNING]
>
> 演讲者模式下不可用，在正式开始录制时，你应该关闭辅助线。

增加了 **Guidelines (辅助线)** 功能，

便于在 OBS 中标识录制窗口的裁剪区块，避免成片出现黑边。

<br />

### 快捷键

|              |                  |
| ------------ | ---------------- |
| <kbd>l</kbd> | 显示或隐藏辅助线 |

<br />
<br />

### 右键菜单

<kbd>Toggle Guidelines</kbd> - 显示或隐藏辅助线。

---

# Shiki

此主题重写了以下 shiki 配置：

```ts
import type { ShikiSetupReturn } from "@slidev/types";
import { defineShikiSetup } from "@slidev/types";

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      // 亮色主题下使用 "github-light"
      light: "github-light",
      // 暗色主题下使用 "dracula"
      dark: "dracula",
    },
  };
});
```

---

# 变量

此主题重写了以下根变量：

```css
:root {
  /* 增大代码块的字体大小 */
  --slidev-code-font-size: 16px;
  /* 增大代码块的字体行高 */
  --slidev-code-line-height: 22px;
  /** 明亮模式下代码块的边框颜色 */
  --slidev-code-border: rgba(51, 51, 51, 0.15);
  /** 为代码块增加圆角 */
  --slidev-code-radius: 6px;
  /** 增大代码块的内边距 */
  --slidev-code-padding: 10px;
  /** shiki 明亮和暗黑模式下的字体颜色和背景色 */
  --shiki-light: #24292e;
  --shiki-dark: #e1e4e8;
  --shiki-light-bg: #fff;
  --shiki-dark-bg: #24292e;
}

html.dark {
  /** 暗黑模式下代码块的边框颜色 */
  --slidev-code-border: rgba(204, 204, 204, 0.15);
}

/** 为代码块增加边框 */
.slidev-code {
  border: 1px solid var(--slidev-code-border);
}

/** 为代码块增加 Mac 风格的 Window Control 按钮 */
.slidev-code::before {
  content: "";
  display: block;
  background-size: 40px;
  margin-bottom: calc(2 * var(--slidev-code-padding));
  border-radius: 50%;
  background: #ff0800 no-repeat 10px 10px;
  width: 12px;
  height: 12px;
  -webkit-box-shadow:
    20px 0 #fdbc40,
    40px 0 #35cd4b;
  box-shadow:
    20px 0 #fdbc40,
    40px 0 #35cd4b;
}
```

---

# 布局

此主题提供了 `portrait` 布局

推荐使用**暗黑模式**进行录制，因为竖屏在手机上播放，为了兼容非全屏时的“黑边”，此主题将背景设置为纯黑色。

```css
/** 暗黑模式下背景为纯黑色 */
html.dark .slidev-layout.portrait {
  background-color: #000;
}
```

---

# 感谢阅读

- [Slidev](https://sli.dev)
- [Github](https://github.com/PassionZale/slidev-theme-portrait)
- [Issues](https://github.com/PassionZale/slidev-theme-portrait/issues)
- [Lei Zhang](https://www.lovchun.com)

**🤝 感谢阅读！**