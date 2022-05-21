import { IfStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { CursosService } from 'src/app/shared';
import { Cursos2Service } from 'src/app/shared/services/cursos2.service';
import { SweetAlertService } from 'src/app/shared/services/sweet-alert.service';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private curso2Service: Cursos2Service,
    private sweetAlertService: SweetAlertService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params.id;
    //     const curso$ = this.cursoService.getById(id);
    //     curso$.subscribe(curso => {
    //       this.updateForm(curso);
    //     });
    //   }
    // );

    // this.route.params -> //Não precisa + por causa do Resolver Guard
    //   .pipe(
    //     map((params: any) => params['id']),
    //     switchMap(id => this.cursoService.getById(id))
    //   )
    //   .subscribe(curso =>  this.updateForm(curso));

    const curso = this.route.snapshot.data['curso'];
    this.createForm(curso);
  }

  createForm(curso: any) {
    this.form = this.formBuilder.group({
      id: [curso.id],
      nome: [curso.nome, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  // updateForm(curso: any) { // Não precisa + por causa do Resolver Guard
  //   this.form.patchValue({
  //     id: curso.id,
  //     nome: curso.nome
  //   });
  // }

  onSubmit() {
    this.submitted = true;
    let valueForm = this.form.value;
    if (this.form.valid) {
      let msgSucesso = 'Curso criado com sucesso!';
      let msgErro = 'Erro ao criar o curso, tente novamente!';
      if (this.form.value.id) {
        msgSucesso = 'Curso atualizado com sucesso!';
        msgErro = 'Erro ao atualizar o curso, tente novamente!';
      }

      this.curso2Service.save(valueForm).subscribe({
        next: (v) => {
          this.sweetAlertService.swalAlertSuccess(msgSucesso);
          this.router.navigate(['/cursos']);
        },
        error: (e) => {
          this.sweetAlertService.swalAlertError(msgErro);
        }
      });

      //Request sem o save()

      // if (this.form.value.id) {
      //   // update
      //   this.cursoService.update(valueForm).subscribe({
      //     next: (v) => {
      //       // console.log('valor Form:', v);
      //       this.sweetAlertService.swalAlertSuccess('Curso atualizado com sucesso!');
      //       this.router.navigate(['/cursos']);
      //     },
      //     error: (err) => {
      //       // console.error('Erro:', err)
      //       this.sweetAlertService.swalAlertError('Erro ao atualizar o curso, tente novamente!')
      //     }
      //   });
      // } else {
      //   // post
      //   this.cursoService.create(valueForm).subscribe({
      //     next: (v) => {
      //       // console.log('valor Form:', v);
      //       this.sweetAlertService.swalAlertSuccess('Curso criado com sucesso!');
      //       this.router.navigate(['/cursos']);
      //     },
      //     error: (err) => {
      //       // console.error('Erro:', err)
      //       this.sweetAlertService.swalAlertError('Erro ao criar o curso, tente novamente!')
      //     }

      //   });
      // }
    }
  }

  onCancel() {
    this.submitted = false;
    this.form.reset();
  }

  hasError(field: string) {
    return this.form.get(field)?.errors;
  }
}
