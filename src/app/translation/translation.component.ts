import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { TranslationService } from '../core/translation.service'
import { Translation } from '../shared/translation.model'

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {

  translation: Translation

  constructor(
    private translationService: TranslationService,
    private activatedRoute: ActivatedRoute
  ) { }

  getTranslationById(id: number): void {
    this.translationService.getTranslationById(id)
      .subscribe((translation: Translation) => {
        this.translation = translation
      })
  }

  ngOnInit() {
    const translationId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    this.getTranslationById(translationId)
  }
}
