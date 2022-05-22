import { Component, OnInit } from '@angular/core';

import { CursosService } from '../shared';

@Component({
  selector: 'app-curso',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers:[CursosService]
})
export class CursosComponent implements OnInit {
  cursos: String[] = [];

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();

    // this.cursoService.emitirCursoCriado.subscribe(
    //   data => {
    //     console.log(data);
    //   }
    // );
    CursosService.emitirCurso.subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
