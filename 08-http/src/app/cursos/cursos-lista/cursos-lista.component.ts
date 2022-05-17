import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from 'src/app/shared/models/curso';

import { CursosService } from 'src/app/shared/services/cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  // cursos?: Curso[];
  cursos$!: Observable<Curso[]>;

  constructor(
    private cursoService: CursosService
    ) { }

  ngOnInit(): void {
    // this.cursoService.list().subscribe(
    //   data => {
    //     console.log('Lista Cursos: ', data);
    //     this.cursos = data;
    //   }
    // );
    this.cursos$ = this.cursoService.list();
  }



}
