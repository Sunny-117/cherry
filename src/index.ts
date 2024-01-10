import { Bundle } from './bundle'

export function cherry(entry: string, outputFileName: string) {
  const bundle = new Bundle({ entry })
  bundle.build(outputFileName)
}
