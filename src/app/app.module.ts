import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatCardModule } from '@angular/material/card'
import { MatListModule } from '@angular/material/list'
import { MatGridListModule } from '@angular/material/grid-list'
import { NgxIndexedDBModule } from 'ngx-indexed-db'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { TranslationsComponent } from './translations/translations.component'
import { TranslationComponent } from './translation/translation.component'
import { TranslationFormComponent } from './translation-form/translation-form.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { TranslationDetailComponent } from './translation/translation-detail/translation-detail.component'
import { LanguagesSelectComponent } from './translation-form/languages-select/languages-select.component'

import { DB_CONFIG } from './shared/db-config'

@NgModule({
  declarations: [
    AppComponent,
    TranslationsComponent,
    TranslationComponent,
    TranslationFormComponent,
    PageNotFoundComponent,
    TranslationDetailComponent,
    LanguagesSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    NgxIndexedDBModule.forRoot(DB_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
