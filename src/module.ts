import MagicString from 'magic-string'
import type { Identifier, ImportSpecifier, ModuleDeclaration, Program, Statement } from 'acorn'
import { parse } from 'acorn'
import { analysis } from './ast/analysis'
import type { ModuleDeclarationWithInclude, ModuleOptions, StatementWithInclude } from './type'
import type { Bundle } from './bundle'

export class Module {
  code: MagicString
  path: string
  bundle: Bundle
  ast: Program
  imports: Record<string, any> = {}
  exports: Record<string, any> = {}
  constructor({ code, path, bundle } = {} as ModuleOptions) {
    this.code = new MagicString(code, { filename: path })
    this.path = path
    this.bundle = bundle
    this.ast = parse(code, {
      ecmaVersion: 7,
      sourceType: 'module',
    })
    this.analysis()
  }

  analysis() {
    this.imports = {}
    this.exports = {}
    this.ast.body.forEach((node) => {
      if (node.type === 'ImportDeclaration') {
        const source = node.source.value
        const specifiers = node.specifiers
        // }
        specifiers.forEach((specifier) => {
          const name = ((specifier as ImportSpecifier).imported as Identifier).name
          const localName = specifier.local.name
          this.imports[localName] = { name, localName, source }
        })
      }
    })
    analysis(this.ast, this.code)
  }

  expendAllStatements() {
    const allStatements: Array<Statement | ModuleDeclaration> = []
    this.ast.body.forEach((statement) => {
      const statements = this.expendStatement(statement)
      allStatements.push(...statements)
    })
    return allStatements
  }

  expendStatement(statement: StatementWithInclude | ModuleDeclarationWithInclude) {
    const result = []
    if (!statement._include) {
      statement._include = true
      result.push(statement)
    }
    return result
  }
}
