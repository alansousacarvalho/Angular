import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { Alunos } from '../alunos';
import { AlunosService } from '../alunos.service';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Alunos;
  inscricao!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private alunoService: AlunosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];
    //     this.aluno = this.alunoService.getAluno(id);
    //   }
    // );
    // this.inscricao = this.route.data.subscribe(
    //   (info) => {
    //     this.aluno = info.aluno;
    //   }
    // );

    console.log('NgOnInit: AlunoDetalheComponent');
    //Subscribe usando o 'Resolve' -> Chama os dados antes de iniciar o componente.
    this.inscricao = this.route.data.subscribe(
      (data) => {
        this.aluno = data['aluno'];
        console.log('Recebendo o obj Aluno do resolver');
      }
    );
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }

}
