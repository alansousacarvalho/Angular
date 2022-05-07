import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
// import { AlunosGuard } from "./guards/alunos.guard";
import { AuthGuard } from "./guards/auth.guard";
import { CursoGuard } from "./guards/curso.guard";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { PaginaNaoEncontradaComponent } from "./pagina-nao-encontrada/pagina-nao-encontrada.component";

const appRoutes: Routes = [
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule),
    canActivate: [AuthGuard],
    canActivateChild: [CursoGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'alunos',
    loadChildren: () => import('./alunos/alunos.module').then(m => m.AlunosModule),
    canActivate: [AuthGuard],
    // canActivateChild: [AlunosGuard],
    canLoad: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '**', component: PaginaNaoEncontradaComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
