import type { Program } from 'acorn'
import type MagicString from 'magic-string'

export function analysis(ast: Program, magicString: MagicString) {
  ast.body.forEach((statement) => {
    Object.defineProperties(statement, {
      __source: {
        value: magicString.snip(statement.start, statement.end),
      },
    })
  })
}
