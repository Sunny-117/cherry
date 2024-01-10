import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { cherry } from 'cherry'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const entry = resolve(__dirname, './msg.js')
cherry(entry, resolve(__dirname, '../bundle.js'))

