import type { ScopeOptions } from '../type'

export class Scope {
  name: string
  params: string[]
  parent: Scope | null
  constructor(options: ScopeOptions = {} as ScopeOptions) {
    this.name = options.name
    this.params = options.params || []
    this.parent = options.parent
  }

  add(name: string) {
    this.params.push(name)
  }

  findDefineScope(name: string): Scope | null {
    if (this.params.includes(name))
      return this

    if (this.parent)
      return this.parent.findDefineScope(name)

    return null
  }
}
