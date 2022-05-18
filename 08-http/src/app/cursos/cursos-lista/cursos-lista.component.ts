import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CursosService, AlertModalService, AlertModalComponent, Curso } from 'src/app/shared';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss']
})
export class CursosListaComponent implements OnInit {
  // cursos?: Curso[]; //Curso c/ a model.
  cursos$!: Observable<Curso[]>; //Curso sendo Observable e sendo tipado c/ Array de Cursos.
  error$ = new Subject<boolean>();
  //bsModalRef?: BsModalRef;

  constructor(
    private cursoService: CursosService,
    // private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.cursoService.list().subscribe(
    //   data => {
    //     console.log('Lista Cursos: ', data);
    //     this.cursos = data;
    //   }
    // );
    this.onRefresh();
  }

  /** Recarrega os cursos */
  onRefresh() {
    this.cursos$ = this.cursoService.list()
    .pipe(
     catchError(error => {
       this.handleError(); //no lugar do 'this.error$.next(true)';
       return EMPTY;
     })
    );

    // this.cursoService.list().subscribe({
    //   next: (v) => {
    //     this.cursos$ = v;
    //   },
    //   error: (e) => {
    //     catchError(error => {
    //       this.error$.next(true);
    //       return EMPTY;
    //     })
    //   },
    //   complete: () => console.log('completo')
    // });
  }

  /** Chama a modal de erro caso dê erro na request dos cursos. */
  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar os cursos, tente novamente mais tarde.');
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = 'Erro ao carregar os cursos, tente novamente mais tarde.';
  }

  onEdit(id: number) {
    this.router.navigate(['editar', id], {relativeTo: this.route});
  }
}
