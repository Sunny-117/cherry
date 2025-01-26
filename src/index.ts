import { Bundle } from './bundle'

export function build(config: CherryConfig) {
  if (config) {
    const { entry } = config
    const bundle = new Bundle({ entry })
    bundle.build()
  }
  else {
    console.error('Cherry config not found')
  }
}

export function cherry(entry: string, outputFileName?: string): void {
  build({ entry, outputFileName })
}

export interface CherryConfig {
  entry: string
  outputFileName?: string
}

export function defineConfig(config: CherryConfig) {
  return config
}
