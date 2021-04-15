import { Params } from './params.model'

export interface LanguagesParams extends Params {
  target: string
  model?: 'base' | 'nmt'
  key: string
}
