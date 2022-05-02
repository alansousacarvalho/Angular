import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../shared/log.service";

@Injectable({
  providedIn: "root"
})

export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static emitirCurso = new EventEmitter<string>();
  private cursos: string[] = ['Angular 2', 'Java', 'React'];

  constructor(private logService: LogService) {
    console.log('Curso Service');
  }

  getCursos() {
    this.logService.mensagem('Lista de Cursos.');
    return this.cursos;
  }

  addCurso(curso: string) {
    this.logService.mensagem(`Criando um novo curso: ${curso}`)
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.emitirCurso.emit(curso);
  }

}
