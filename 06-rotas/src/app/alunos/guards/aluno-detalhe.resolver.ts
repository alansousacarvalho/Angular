import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Alunos } from "../alunos";
import { AlunosService } from "../alunos.service";

@Injectable()
export class AlunoDetalheResolve implements Resolve<Alunos> {

  constructor(private alunosService: AlunosService) {
  }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any {

    console.log('Recebendo o valor no Resolver');
    let id = route.params['id'];
    return this.alunosService.getAluno(id);
  }

}
