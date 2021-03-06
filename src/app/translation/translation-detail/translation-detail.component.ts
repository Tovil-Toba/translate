import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'

import { TranslationService } from '../../core/translation.service'
import { Language } from '../../shared/language.model'

@Component({
  selector: 'app-translation-detail',
  templateUrl: './translation-detail.component.html',
  styleUrls: ['./translation-detail.component.css']
})
export class TranslationDetailComponent implements OnInit {

  @Input() languageCode: string
  @Input() title: string
  @Input() text: string

  constructor(private translationService: TranslationService) { }

  get flagBackgroundImage(): string {
    return `url('/assets/flags/${this.languageCode}.png')`
  }

  get languageByCode(): Observable<Language> {
    return this.translationService.getLanguageByCode(this.languageCode)
  }

  ngOnInit() {
  }
}
