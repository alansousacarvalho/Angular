import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../models/curso';
import { delay, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  private readonly API = `${environment.API}cursos`;

  constructor(private http: HttpClient) { }
  /** Listar os cursos */
  list() {
    return this.http.get<Curso[]>(this.API)
    .pipe(
      delay(1500),
      tap(console.log)
    );
  }

  /** pegar os cursos pelo ID */
  getById(id: number) {
    return this.http.get<Curso>(`${this.API}/${id}`).pipe(take(1));
  }
  /** Criar cursos */
  private create(curso: any) {
    return this.http.post(this.API, curso)
    .pipe(take(1));
  }

  /** Atualizar */
  private update(curso: any) {
    return this.http.put(`${this.API}/${curso.id}`, curso).pipe(take(1));
  }

  /** Responsável por diferenciar se vai ser UPDATE ou POST, de acordo com ID do curso. */
  save(curso: any) {
    if(curso.id) {
      return this.update(curso);
    } else {
      return this.create(curso);
    }
  }

  /** Deletar  */
  remove(id: any) {
    return this.http.delete(`${this.API}/${id}`).pipe(take(1))
  }
}
