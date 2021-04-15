import { Params } from './params.model'

export interface TranslationParams extends Params {
  q: string
  target: string
  source?: string
  format?: 'html' | 'text'
  model?: 'base' | 'nmt'
  key: string
}
