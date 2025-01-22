# slidev-theme-portrait

[![NPM version](https://img.shields.io/npm/v/@code-sugar/slidev-theme-portrait?color=3AB9D4&label=)](https://www.npmjs.com/package/@code-sugar/slidev-theme-portrait)

A slide portrait theme for record portrait video.

## Install

Add the following frontmatter to your `slides.md`. Start Slidev then it will prompt you to install the theme automatically.

<pre><code>---
theme: <b>@code-sugar/slidev-theme-portrait</b>
---</code></pre>

Learn more about [how to use a theme](https://sli.dev/guide/theme-addon#use-theme).

## Configs

This theme overrided the following configs:

```json
"slidev": {
	"colorSchema": "both",
	"defaults": {
		"aspectRatio": "9/16",
		"layout": "portrait",
		"codeCopy": false,
		"fonts": {
			"sans": "Nunito Sans",
			"mono": "Fira Code"
		}
	}
}
```

## Shiki

This theme overrided the following shiki configs:

```ts
import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup((): ShikiSetupReturn => {
  return {
		themes: {
			light: "github-light",
			dark: "dracula"
		}
  }
})
```

## Variables

This theme overrided the following root variables:

```css
:root {
  --slidev-code-border: rgba(51, 51, 51, 0.15);
  --slidev-code-radius: 6px;
  --slidev-code-padding: 10px;
  --shiki-light: #24292e;
  --shiki-dark: #e1e4e8;
  --shiki-light-bg: #fff;
  --shiki-dark-bg: #24292e;
}

html.dark {
  --slidev-code-border: rgba(204, 204, 204, 0.15);
}

.slidev-code {
  border: 1px solid var(--slidev-code-border);
}

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

## Layouts

This theme provides the following layouts:

> TODO:

## Components

This theme provides the following components:

> TODO:

## Contributing

- `npm install`
- `npm run dev` to start theme preview of `example.md`
- Edit the `example.md` and style to see the changes
- `npm run export` to generate the preview PDF
- `npm run screenshot` to generate the preview PNG
