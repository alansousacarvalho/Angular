import { HttpClient } from "@angular/common/http";
import { delay, take, tap } from "rxjs/operators";


export class CrudService<T extends {id?: number}> {
  constructor(protected http: HttpClient, private API_URL: any) {}

  list() {
    return this.http.get<T[]>(this.API_URL)
      .pipe(
        delay(1500),
        tap(console.log)
      );
  }

  /** pegar os registros pelo ID */
  getById(id: number) {
    return this.http.get<T>(`${this.API_URL}/${id}`).pipe(take(1));
  }
  /** Criar registros */
  private create(registros: T) {
    return this.http.post(this.API_URL, registros)
      .pipe(take(1));
  }

  /** Atualizar */
  private update(registros: T) {
    return this.http.put(`${this.API_URL}/${registros.id}`, registros).pipe(take(1));
  }

  /** Responsável por diferenciar se vai ser UPDATE ou POST, de acordo com ID do registros. */
  save(registros: T) {
    if (registros.id) {
      return this.update(registros);
    } else {
      return this.create(registros);
    }
  }

  /** Deletar  */
  remove(id: any) {
    return this.http.delete(`${this.API_URL}/${id}`).pipe(take(1))
  }
}
