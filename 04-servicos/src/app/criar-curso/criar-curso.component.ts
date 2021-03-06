import { Component, OnInit } from '@angular/core';

import { CursosService } from '../shared';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrls: ['./criar-curso.component.css'],
  providers:[CursosService]
})
export class CriarCursoComponent implements OnInit {
  cursos: String[] = [];

  constructor(private cursoService: CursosService) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }

  onAddCurso(curso: string) {
    this.cursoService.addCurso(curso);
  }
}
