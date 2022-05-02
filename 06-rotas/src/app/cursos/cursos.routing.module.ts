import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  CursoNaoEncontradoComponent,
  CursosComponent,
  CursoDetalheComponent
} from ".";

const cursosRoutes: Routes = [
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent },
  { path: ':id', component: CursoDetalheComponent },
]

@NgModule({
  imports: [RouterModule.forChild(cursosRoutes)],
  exports: [RouterModule]
})

export class CursosRoutingModule {

}
