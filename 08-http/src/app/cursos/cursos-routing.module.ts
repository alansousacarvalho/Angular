import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosListaComponent, CursosFormComponent } from '.';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  { path: 'novo', component: CursosFormComponent },
  { path: 'editar/:id', component: CursosFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
