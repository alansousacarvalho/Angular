import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormControlName, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FormValidations } from '../shared/form-validations';

import { Estados } from '../shared/models/estados.models';
import { ConsultaCepService } from '../shared/services/consulta-cep.service';
import { EstadosService } from '../shared/services/estados.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  form!: FormGroup;
  //estado: Estados[] = [];
  estado!: Observable<Estados[]>;
  cargos!: any[];
  tecnologias!: any[];
  newsletterOptions!: any[];
  framework = ['Angular', 'Vue', 'React'];

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private estadoService: EstadosService,
    private consultaCepService: ConsultaCepService
  ) { }

  ngOnInit(): void {
    // this.form = new FormGroup({
    //   nome: new FormControl('Loiane'),
    //   email: new FormControl('Loiane')
    // });

    this.form = this.formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      confirmarEmail: ['', [Validators.required, Validators.email]],
      endereco: this.formBuilder.group({
        cep: [null, [Validators.required, FormValidations.cepValidator]],
        numero: [null, Validators.required],
        complemento: [null],
        rua: [null, Validators.required],
        bairro: [null, Validators.required],
        cidade: [null, Validators.required],
        estado: [null, Validators.required]
      }),
      cargo: [null],
      tecnologia: [null],
      newsletter: [null],
      termos: [null, Validators.pattern('true')],
      frameworks: this.buildFrameworks()
    });
    // this.estadoService.getEstados().subscribe(
    //   dados => {
    //     this.estado = dados;
    //     // console.log(this.estado);
    // });
    this.estado = this.estadoService.getEstados();
    this.cargos = this.estadoService.getCargos();
    this.tecnologias = this.estadoService.getTecnologias();
    this.newsletterOptions = this.estadoService.getNewsletter();
  }

  buildFrameworks() {
    const values = this.framework.map(v => new FormControl(false));
    return this.formBuilder.array(values, FormValidations.requiredMinCheckbox(1));

    // this.formBuilder.array [
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    //   new FormControl(false),
    // ]
  }

  getFrameworksControls() {
    const controls = this.form.get('frameworks') ?  (<FormArray>this.form.get('frameworks')).controls : null;
    return controls;
  }

  onSubmit() {
    // console.log(this.form);

    let valueSubmit = Object.assign({}, this.form.value);
    valueSubmit = Object.assign(valueSubmit, {
      frameworks: valueSubmit.frameworks
        .map((value: any, index: any) => value ? this.framework[index] : null)
        .filter((value: any) => value !== null)
    });

    if (this.form.valid) {
      this.http.post('https://httpbin.org/post', JSON.stringify(valueSubmit))
        .pipe(map(res => res))
        .subscribe(
          // dados => {
          //   console.log('dados subscribe', dados);
          //   //reset form
          //   this.form.reset();
          // });
          {
            next: (dados) => {
              console.log('dados subscribe', dados);
              // this.resetar();
            },
            error: (error) => {
              alert('erro');
            }
          });
    } else {
      this.verificaValidacoesForm(this.form);
    }
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle?.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    })
  }

  resetar() {
    this.form.reset();
  }

  verificaValidTouched(campo: string) {
    return this.form.get(campo)?.invalid && this.form.get(campo)?.touched;
  }

  aplicaCssValidacao(campo: string) {
    return {
      'needs-validation': this.verificaValidTouched(campo),
      'was-validated': this.verificaValidTouched(campo)
    }
  }

  verificaEmailInvalido() {
    let campoEmail = this.form.get('email');
    if (campoEmail?.errors) {
      return campoEmail?.errors['email'] && campoEmail?.touched;
    }
  }

  consultaCEP() {
    //Nova variável "cep" que recebe o valor do cep pelo formulário;
    let cep = this.form.get('endereco.cep')?.value;

    if (cep !== '' && cep != null) {
      this.consultaCepService.consultaCEP(cep).subscribe(
        (data: any) => {
          this.populaDadosForm(data);
        }
      );
    }
  }

  resetaDadosForm() {
    this.form.patchValue({
      endereco: {
        rua: null,
        cep: null,
        numero: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null
      }
    });
  }

  populaDadosForm(dados: any) {
    this.form.patchValue({
      endereco: {
        rua: dados.logradouro,
        cep: dados.cep,
        numero: '',
        complemento: dados.complemento,
        bairro: dados.bairro,
        cidade: dados.localidade,
        estado: dados.uf
      }
    });
  }

  setarCargo() {
    const cargo = { nome: 'Dev', nivel: 'Pleno', desc: 'Dev Pl' };
    this.form.get('cargo')?.setValue(cargo);
  }

  compararCargos(obj1: any, obj2: any) {
    return obj1 && obj2 ? (obj1.nome === obj2.nome && obj1.nivel === obj2.nivel) : obj1 === obj2;
  }

  setarTecnologias() {
    this.form.get('tecnologia')?.setValue(['java', 'javascript', 'php']);
  }

}
