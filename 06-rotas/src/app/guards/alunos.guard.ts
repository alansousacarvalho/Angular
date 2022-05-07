import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

export class AlunosGuard implements CanActivateChild{

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    // console.log(childRoute)
    // console.log(state)

    console.log('AlunosGuard: Guarda rota filha');

    if(state.url.includes('editar')) {
      // alert('Usuário sem acesso');
      // return of(false);
    }
    return true;
  }

}
