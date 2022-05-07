import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import {
  CursoNaoEncontradoComponent,
  CursosComponent,
  CursoDetalheComponent
} from ".";

/** O 1º path está vazio, por causa do LazyLoading, pois já está sendo definido no LoadChildren no App.Routing. */
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
