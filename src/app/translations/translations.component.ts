import { Component, OnInit } from '@angular/core'

import { TranslationService } from '../core/translation.service'
import { Translation } from '../shared/translation.model'

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  translations: Translation[] = []

  constructor(private translationService: TranslationService) { }

  getFlagBackgroundImage(languageCode: string): string {
    return `url('/assets/flags/${languageCode}.png')`
  }

  getTranslations(): void {
    this.translationService.getTranslations()
      .subscribe((translations: Translation[]) => {
        this.translations = translations
      })
  }

  ngOnInit() {
    this.getTranslations()
  }
}
