import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AlunosDeactivateGuard } from "../guards/alunos-deactivate.guard";
import { AlunosGuard } from "../guards/alunos.guard";
import { AlunoDetalheComponent } from "./aluno-detalhe/aluno-detalhe.component";
import { AlunoFormComponent } from "./aluno-form/aluno-form.component";
import { AlunosComponent } from "./alunos.component";
import { AlunoDetalheResolve } from "./guards/aluno-detalhe.resolver";

const alunosRoutes: Routes = [
  {
    path: '', component: AlunosComponent,
    canActivateChild: [AlunosGuard],
    children: [
      { path: 'novo', component: AlunoFormComponent },
      { path: ':id', component: AlunoDetalheComponent, resolve: AlunoDetalheResolve },
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
