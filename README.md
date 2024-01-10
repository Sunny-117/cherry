
# cherry [![npm](https://img.shields.io/npm/v/@sunny-117/cherry.svg)](https://npmjs.com/package/@sunny-117/cherry)


Cherry is a lightweight and efficient JavaScript bundler designed for rapid construction and packaging of modern web applications. With its simple yet powerful workflow, Cherry is dedicated to providing optimal performance and development experience.


## Features

📦️ Lightweight: Cherry focuses on minimizing the bundler's footprint to ensure quick startup and loading times.

⚡️ Rapid Deployment: Through efficient bundling algorithms, Cherry optimizes resource loading and runtime speed, resulting in a more responsive application.

🔧 Simple Configuration: Cherry provides a concise and intuitive set of configuration options, enabling developers to easily customize and adjust the project's bundling process.

🔥 Modern Support: Cherry supports ES6+ syntax, modular development, and seamless integration with popular frameworks and libraries.


## Install

```bash
pnpm i @sunny-117/cherry -D
```

## Usage

```ts
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { cherry } from '@sunny-117/cherry'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entry = resolve(__dirname, './msg.js')
cherry(entry, resolve(__dirname, '../bundle.js'))

```

See an [example](https://github.com/Sunny-117/cherry/blob/main/playground/src/index.js) for more details.


## License

[MIT](./LICENSE) License © 2024 [Sunny-117](https://github.com/sunny-117)
