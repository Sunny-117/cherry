import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cherry } from '@sunny-117/cherry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// debugger
const entry = resolve(__dirname, './main.js')
cherry(entry, resolve(__dirname, '../bundle.js'))
