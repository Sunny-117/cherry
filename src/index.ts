import { Bundle } from './bundle'

export function cherry(entry: string, outputFileName: string): void {
  // TODO: 不存在该目录 自动创建
  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = dirname(__filename);

  const bundle = new Bundle({ entry })
  bundle.build(outputFileName)
}
