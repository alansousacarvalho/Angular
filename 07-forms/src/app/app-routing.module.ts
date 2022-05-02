import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataFormComponent } from './data-form';
import { TemplateFormComponent } from './template-form';

const routes: Routes = [
  { path: 'templateForm', component: TemplateFormComponent },
  { path: 'dataForm', component: DataFormComponent },
  { path: ' ', redirectTo: 'templateForm' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
