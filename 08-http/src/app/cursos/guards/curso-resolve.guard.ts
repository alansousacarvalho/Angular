import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Curso, CursosService } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class CursoResolveGuard implements Resolve<Curso> {

  constructor(
    private service: CursosService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot, //foto da rota
    state: RouterStateSnapshot //estado da rota
  ): Observable<Curso> | Observable<any> {

    if (route.params && route.params['id']) {
      return this.service.getById(route.params['id'])
    }

    return of({
      nome: null,
      id: null,
    });
  }

}
