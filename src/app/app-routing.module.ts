import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { TranslationFormComponent } from './translation-form/translation-form.component'
import { TranslationComponent } from './translation/translation.component'
import { TranslationsComponent } from './translations/translations.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

const routes: Routes = [
  { path: 'translation-form', component: TranslationFormComponent },
  { path: 'translation/:id', component: TranslationComponent },
  { path: 'translations', component: TranslationsComponent },
  { path: '',   redirectTo: '/translation-form', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
