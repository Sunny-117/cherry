import fs from 'node:fs'
import MagicString from 'magic-string'
import { Module } from './module'
import type { BundleOptions } from './type'

export class Bundle {
  entryPath: string
  module: any
  statements: any[] = []
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

  fetchModule(importee: string) {
    const route = importee
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
    // eslint-disable-next-line ts/ban-ts-comment
    // @ts-expect-error
    const magicString = new MagicString.Bundle()
    this.statements.forEach((statement) => {
      const source = statement.__source.clone()
      magicString.addSource({
        content: source,
        separator: '\n',
      })
    })
    return { code: magicString.toString() }
  }
}
