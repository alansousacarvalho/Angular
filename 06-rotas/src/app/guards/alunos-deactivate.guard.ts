import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

// import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { IFormCanDeactivate } from "./form-candeactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  constructor() {

  }

  canDeactivate(
    component: IFormCanDeactivate,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Guarda de desativação.');
    return component.podeDesativar();
  }

}
