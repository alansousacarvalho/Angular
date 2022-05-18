import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosListaComponent, CursosFormComponent } from '.';
import { CursoResolveGuard } from './guards/curso-resolve.guard';

const routes: Routes = [
  { path: '', component: CursosListaComponent },
  {
    path: 'novo', component: CursosFormComponent,
    resolve: {
      curso: CursoResolveGuard
    }
  },
  {
    path: 'editar/:id', component: CursosFormComponent,
    resolve: {
      curso: CursoResolveGuard
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
