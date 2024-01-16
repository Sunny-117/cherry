import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cherry } from '@sunny-117/cherry'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// debugger
// const entryTest1 = resolve(__dirname, './main.js')
const entryTest2 = resolve(__dirname, './test2/main.js')
cherry(entryTest2, resolve(__dirname, '../bundle.js'))
