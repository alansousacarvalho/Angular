import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";

import { Observable } from "rxjs";

@Injectable()

export class CursoGuard implements CanActivateChild {

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Guarda Filha')
    return true

  }

}
