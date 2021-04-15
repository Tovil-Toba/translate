import { Language } from './language.model'

export interface LanguagesResponse {
  data: {
    languages: Language[]
  }
}
