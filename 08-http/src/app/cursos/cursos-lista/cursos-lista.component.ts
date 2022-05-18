import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { catchError, EMPTY, Observable, Subject } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CursosService, AlertModalService, AlertModalComponent, Curso } from 'src/app/shared';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';

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

  //Delete Modal
  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any; //2ª forma de usar o ng-template
  cursoSelecionado!: Curso;

  constructor(
    private cursoService: CursosService,
    // private modalService: BsModalService,
    private alertService: AlertModalService,
    private sweetAlertService: SweetAlertService,
    private router: Router,
    private route: ActivatedRoute,
    private modalService: BsModalService
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

  /** Editar o curso */
  onEdit(id: number) {
    this.router.navigate(['editar', id], { relativeTo: this.route });
  }

  /** Deletar o curso */
  onDelete(curso: any) {
    this.cursoSelecionado = curso;
    this.deleteModalRef = this.modalService.show(this.deleteModal, { class: 'modal-sm' })
  }

  /** Confirmar se o usuário realmente quer deletar o curso */
  onConfirmDelete() {
    this.cursoService.remove(this.cursoSelecionado).subscribe({
      next: (v) => {
        this.onRefresh();
        this.sweetAlertService.swalAlertSuccess('Curso deletado com sucesso!');
        this.deleteModalRef?.hide();

      },
      error: (err) => {
        this.sweetAlertService.swalAlertError('Erro ao deletar o curso, tente novamente mais tarde.');
      }
    });
  }

  /** Cancelar delete */
  onDeclineDelete() {
    this.deleteModalRef?.hide();
  }
}
