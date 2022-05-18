import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { CursosService } from 'src/app/shared';
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
    private cursoService: CursosService,
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

    this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.cursoService.getById(id))
      )
      .subscribe(curso =>  this.updateForm(curso));
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      id: [null],
      nome: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(250)]]
    });
  }

  updateForm(curso: any) {
    this.form.patchValue({
      id: curso.id,
      nome: curso.nome
    });
  }

  onSubmit() {
    this.submitted = true;
    let valueForm = this.form.value;
    if (this.form.valid) {
      console.log('Submit');
      this.cursoService.create(valueForm).subscribe({
        next: (v) => {
          // console.log('valor Form:', v);
          this.sweetAlertService.swalAlertSuccess('Curso criado com sucesso!');
          this.router.navigate(['/cursos']);
        },
        error: (err) => {
          // console.error('Erro:', err)
          this.sweetAlertService.swalAlertError('Erro ao criar o curso, tente novamente!')
        }

      });
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
