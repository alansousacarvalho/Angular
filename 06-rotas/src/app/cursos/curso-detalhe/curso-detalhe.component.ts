import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {

  id: number = 0;
  inscricao!: Subscription;
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {
    // this.id = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        //Escutar as mudanças nos params, para manter o msm atualizado.
        this.id = params['id'];
        //Verificar se o curso existe, de acordo com o id, Senão, curso = null.
        this.curso = this.cursoService.getCurso(this.id);

        if (this.curso == null) {
          this.router.navigate(['/cursos/naoEncontrado']);
        }
      });
  }

  //Desinscrever para evitar que o 'subscribe' continue ativo após a destruição do component.
  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

}
