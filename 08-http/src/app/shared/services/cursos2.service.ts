import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Curso } from '../models';
import { environment } from 'src/environments/environment';
import { CrudService } from './crud-service';

@Injectable({
  providedIn: 'root'
})
export class Cursos2Service extends CrudService<Curso>{

  constructor(protected override http: HttpClient) {
    super(http, `${environment.API}cursos`);
   }
}
