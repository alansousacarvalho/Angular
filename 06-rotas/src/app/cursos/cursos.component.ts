import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos!: any[];
  pagina!: number;
  inscricao!: Subscription; //Desubscribe;

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    //Request GetCursos;
    this.cursos = this.cursoService.getCursos();
    //QueryParams
    this.inscricao = this.route.queryParams.subscribe(
      (query: any) => {
        this.pagina = query['pagina'];
      }
    );
    this.pagina = 1;
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  proximaPagina() {
    // this.pagina++;
    this.router.navigate(['/cursos'], { queryParams: { 'pagina': ++this.pagina } });
  }

}
