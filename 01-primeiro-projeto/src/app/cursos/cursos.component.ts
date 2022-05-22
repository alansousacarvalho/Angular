import { Component, OnInit } from '@angular/core';

import { CursosService } from '../shared';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  nomePortal: string;
  cursos: String[];

  constructor(private cursosService: CursosService) {
    this.nomePortal = "www.google.com";
    this.cursos = this.cursosService.getCursos();
   }

   ngOnInit(): void {
  }


}
