// import fs from 'node:fs'
// import path from 'node:path'
import { Bundle } from './bundle'

// import { DEFAULT_CONFIG_FILES } from './constants'

// TODO: 不存在该目录 自动创建

export function build(config: CherryConfig) {
  if (config) {
    const { entry, outputFileName } = config
    const bundle = new Bundle({ entry })
    bundle.build(outputFileName)
  }
  else {
    console.error('Cherry config not found')
  }
}

export function cherry(entry: string, outputFileName: string): void {
  build({ entry, outputFileName })
}

export interface CherryConfig {
  entry: string
  outputFileName: string
}

// TODO: support cli
export function defineConfig(cherryConfig: CherryConfig) {
  const { entry, outputFileName } = cherryConfig
  build({ entry, outputFileName })
}
