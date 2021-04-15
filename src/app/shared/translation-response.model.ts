// export interface TranslationResponse {
//   sourceLanguage: string
//   targetLanguage: string
//   text: string
//   translation: string
// }

export interface TranslationResponse {
  data: {
    translations: {
      translatedText: string
      detectedSourceLanguage?: string
      model?: string
    }[]
  }
}
