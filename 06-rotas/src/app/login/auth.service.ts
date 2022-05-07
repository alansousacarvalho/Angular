
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>(); //Com esse Event, que passamos pro App se é pra mostrar menu ou não.

  constructor(
    private route: Router
  ) { }

  //Validar login
  fazerLogin(usuario: Usuario){
    if(usuario.nome == 'teste' && usuario.senha == '123') {
      this.usuarioAutenticado = true;
      this.mostrarMenuEmitter.emit(true);
      this.route.navigate(['/']);
    } else {
      this.usuarioAutenticado = false;
      this.mostrarMenuEmitter.emit(false);
    }
  }

  usuarioEstaAutenticado() {
    return this.usuarioAutenticado;
  }
}
