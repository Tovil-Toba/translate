import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { shareReplay, map } from 'rxjs/operators'
import { NgxIndexedDBService } from 'ngx-indexed-db'

import { Language } from './language.model'
import { LanguagesParams } from './languages-params.model'
import { LanguagesResponse } from './languages-response.model'
import { Translation } from './translation.model'
import { TranslationParams } from './translation-params.model'
import { TranslationResponse } from './translation-response.model'
import { API_KEY } from './constants'

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly API_URL: string = `https://translation.googleapis.com/language/translate/v2`
  private readonly LANGUAGES_URL: string = `${this.API_URL}/languages`
  private languages$: Observable<Language[]>
  translations: Translation[] = []

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

  translate(translation: Translation): Observable<TranslationResponse> {
    const params: TranslationParams = {
      key: API_KEY,
      q: translation.text,
      source: translation.source,
      target: translation.target
    }
    return this.http.post<TranslationResponse>(this.API_URL, null,{ params })
  }

  getTranslations(): Observable<Translation[]> {
    return this.dbService.getAll('translations')
  }

  getTranslationById(id: number): Observable<Translation> {
    return this.dbService.getByKey('translations', id)
  }
}
