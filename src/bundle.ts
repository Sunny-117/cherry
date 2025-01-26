import type { ModuleDeclaration, Statement } from 'acorn'
import type { BundleOptions } from './type'
import fs from 'node:fs'
import path from 'node:path'
import MagicString, { Bundle as MagicStringBundle } from 'magic-string'
import { Module } from './module'

export class Bundle {
  entryPath: string
  module: any
  statements: Array<Statement | ModuleDeclaration> = []
  constructor(options: BundleOptions = {} as BundleOptions) {
    this.entryPath = `${options.entry.replace(/.js$/, '')}.js`
    this.module = {}
  }

  build(outputFileName: string) {
    const entryModule = this.fetchModule(this.entryPath)
    if (entryModule) {
      this.statements = entryModule.expendAllStatements()
      const { code } = this.generate()
      fs.writeFileSync(outputFileName, code, 'utf-8')
    }
  }

  fetchModule(importee: string, importer?: string) {
    let route
    if (!importer) { // 如果没有模块导入此模块，说明这就是入口模块
      route = importee
    }
    else {
      if (path.isAbsolute(importee)) {
        // 绝对路径
        route = importee
      }
      else if (importee[0] === '.') {
        // 相对路径
        route = path.resolve(path.dirname(importer), `${importee.replace(/\.js$/, '')}.js`)
      }
    }
    if (route) {
      const code = fs.readFileSync(route, 'utf-8')
      const module = new Module({
        code,
        path: route,
        bundle: this,
      })
      return module
    }
  }

  generate() {
    const magicString = new MagicStringBundle()
    this.statements.forEach((statement) => {
      const source = (statement as any).__source.clone()
      if (statement.type === 'ExportNamedDeclaration')
      // export const name = 'abc' 开始位置截取到声明位置
        source.remove(statement.start, statement.declaration!.start)

      magicString.addSource({
        content: source,
        // separator: '\n',
      })
    })
    return { code: magicString.toString() }
  }
}
