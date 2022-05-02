import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Alunos } from "../alunos";

@Injectable()
export class AlunoDetalheResolve implements Resolve<Alunos> {

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any {
    console.log(route);
    // let id = route.params['id'];
    return true;
  }

}
