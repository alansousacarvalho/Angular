import { Injectable } from '@angular/core';

import { Alunos } from './alunos';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Alunos[] = [
    {id: 1, nome: 'Aluno 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Aluno 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Aluno 03', email: 'aluno03@email.com'},
  ];

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  /** Verificar a existência do aluno, caso não existir, retorna NULL */
  getAluno(id: number) {
    for (let i = 0; i < this.alunos.length; i++) {
      let aluno = this.alunos[i];

      if(aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
