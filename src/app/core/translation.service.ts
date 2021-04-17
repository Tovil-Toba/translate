import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'
import { NgxIndexedDBService } from 'ngx-indexed-db'

import { Language } from '../shared/language.model'
import { LanguagesParams } from '../shared/languages-params.model'
import { LanguagesResponse } from '../shared/languages-response.model'
import { Translation } from '../shared/translation.model'
import { TranslationParams } from '../shared/translation-params.model'
import { TranslationResponse } from '../shared/translation-response.model'
import { API_KEY } from '../shared/constants'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  translations: Translation[] = []

  private readonly API_URL: string = `https://translation.googleapis.com/language/translate/v2`
  private readonly LANGUAGES_URL: string = `${this.API_URL}/languages`
  private languages$: Observable<Language[]>

  constructor(
    private http: HttpClient,
    private dbService: NgxIndexedDBService
  ) {}

  get languages(): Observable<Language[]> {
    if (!this.languages$) {
      this.languages$ = this.requestLanguages()
        .pipe(
          shareReplay(1)
        )
    }
    return this.languages$
  }

  getLanguageByCode(code: string): Observable<Language> {
    return this.languages.pipe(
      map((languages: Language[]) => languages.find(
        (language: Language) => language.language === code)
      )
    )
  }

  getTranslations(): Observable<Translation[]> {
    return this.dbService.getAll('translations')
  }

  getTranslationById(id: number): Observable<Translation> {
    return this.dbService.getByKey('translations', id)
  }

  translate(translation: Translation): Observable<TranslationResponse> {
    const params: TranslationParams = {
      key: API_KEY,
      q: translation.text,
      source: translation.source,
      target: translation.target
    }
    return this.http.post<TranslationResponse>(this.API_URL, null,{ params })
  }

  private requestLanguages(target: string = 'ru'): Observable<Language[]>  {
    const params: LanguagesParams = {
      key: API_KEY,
      target
    }
    return this.http.get<LanguagesResponse>(this.LANGUAGES_URL, { params })
      .pipe(
        map((response: LanguagesResponse): Language[] => response.data.languages)
      )
  }
}
