# cherry [![npm](https://img.shields.io/npm/v/@sunny-117/cherry.svg)](https://npmjs.com/package/@sunny-117/cherry)

English | <a href="./README-zh_CN.md">简体中文</a>

<img src="./assets/logo.webp" width="300">

Cherry is a lightweight and efficient JavaScript bundler designed for rapid construction and packaging of modern web applications. With its simple yet powerful workflow, Cherry is dedicated to providing optimal performance and development experience.

## Features

📦️ Lightweight: Cherry focuses on minimizing the size of the bundling tool, ensuring fast startup and loading times.

🔧 Simple Configuration: Provides concise and intuitive configuration options, allowing for easy customization and adjustment of the project's bundling process.

🔥 Tree-shaking: Automatically removes unused code through static analysis, reducing the size of the final bundled file.

## Install

```bash
pnpm i @sunny-117/cherry -D
```

## Usage

```ts
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cherry } from '@sunny-117/cherry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const entry = resolve(__dirname, './msg.js')
cherry(entry, resolve(__dirname, '../bundle.js'))
```

See an [example](https://github.com/Sunny-117/cherry/blob/main/playground/src/index.js) for more details.

## License

[MIT](./LICENSE) License © 2024 [Sunny-117](https://github.com/sunny-117)
