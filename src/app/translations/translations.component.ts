import { Component, OnInit } from '@angular/core'

import { TranslationService } from '../shared/translation.service'
import { Translation } from '../shared/translation.model'

@Component({
  selector: 'app-translations',
  templateUrl: './translations.component.html',
  styleUrls: ['./translations.component.css']
})
export class TranslationsComponent implements OnInit {

  translations: Translation[] = []

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.getTranslations()
  }

  getTranslations(): void {
    this.translationService.getTranslations()
      .subscribe((translations: Translation[]) => {
        this.translations = translations
      })
  }
}
