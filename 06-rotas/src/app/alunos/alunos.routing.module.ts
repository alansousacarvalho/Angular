import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosComponent } from ".";
import { AlunoDetalheComponent } from "./aluno-detalhe";
import { AlunoFormComponent } from "./aluno-form";
import { AlunosDeactivateGuard, AlunosGuard } from "../guards";
import { AlunoDetalheResolve } from "./guards";

/** O 1º path está vazio por causa do LazyLoading, pois já está sendo definido no LoadChildren no App.Routing. */
const alunosRoutes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: ':id', component: AlunoDetalheComponent, resolve: { aluno: AlunoDetalheResolve } },
      {
        path: ':id/editar', component: AlunoFormComponent,
        canDeactivate: [AlunosDeactivateGuard]
      },
    ]
  },
  // {path: 'alunos/novo', component: AlunoFormComponent},
  // {path: 'alunos/:id', component: AlunoDetalheComponent},
  // {path: 'alunos/:id/editar', component: AlunoFormComponent},
]

@NgModule({
  imports: [RouterModule.forChild(alunosRoutes)],
  exports: [RouterModule]
})

export class AlunosRoutingModule {

}
