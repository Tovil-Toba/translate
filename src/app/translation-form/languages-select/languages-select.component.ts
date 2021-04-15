import { Component, OnInit, Input } from '@angular/core'
import { Observable } from 'rxjs'
import { Language } from '../../shared/language.model'
import { TranslationService } from '../../shared/translation.service'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-languages-select',
  templateUrl: './languages-select.component.html',
  styleUrls: ['./languages-select.component.css']
})
export class LanguagesSelectComponent implements OnInit {

  @Input() formControl: FormControl
  @Input() label: string

  languages$: Observable<Language[]>

  constructor(private translationService: TranslationService) { }

  ngOnInit() {
    this.languages$ = this.translationService.languages
  }

}
