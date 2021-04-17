import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { Router } from '@angular/router'
import { NgxIndexedDBService } from 'ngx-indexed-db'

import { TranslationService } from '../core/translation.service'
import { Translation } from '../shared/translation.model'
import { TranslationResponse } from '../shared/translation-response.model'

@Component({
  selector: 'app-translation-form',
  templateUrl: './translation-form.component.html',
  styleUrls: ['./translation-form.component.css']
})
export class TranslationFormComponent implements OnInit {

  form: FormGroup
  sourceControl = new FormControl('en')
  targetControl = new FormControl('ru')
  textControl = new FormControl('')

  constructor(
    private translationService: TranslationService,
    private dbService: NgxIndexedDBService,
    private router: Router
  ) {
    this.form = new FormGroup({
      source: this.sourceControl,
      target: this.targetControl,
      text: this.textControl
    })
  }

  ngOnInit() {
  }

  swapLanguages(event: Event): void {
    event.preventDefault()
    const target = this.targetControl.value
    const source = this.sourceControl.value
    this.sourceControl.setValue(target)
    this.targetControl.setValue(source)
  }

  onSubmit(): void {
    const translation = this.form.value as Translation
    this.translationService.translate(translation)
      .subscribe((translationResponse: TranslationResponse) => {
        translation.translatedText = translationResponse.data.translations[0].translatedText
        this.dbService
          .add('translations', translation)
          .subscribe((id: number) => {
            this.router.navigate(['/translation', id])
          })
      })
  }
}
