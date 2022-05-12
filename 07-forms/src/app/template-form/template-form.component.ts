import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { ConsultaCepService } from '../shared/services/consulta-cep.service';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  usuario: any = {
    nome: null,
    email: null
  }

  constructor(
    private http: HttpClient,
    private consultaCepService: ConsultaCepService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log('form: ', form);
    console.log('usuario: ', this.usuario);

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
      .subscribe(dados => console.log('dados subscribe', dados));
  }

  verificaValidTouched(campo: any) {
    return campo.invalid && campo.touched;
  }

  validatedInput(campo: any) {
    return {
      'needs-validation': this.verificaValidTouched(campo),
      'was-validated': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any, form: any) {
    // console.log(cep);
     cep = cep.replace(/\D/g, "");

     if (cep !== '' && cep != null) {
      this.consultaCepService.consultaCEP(cep).subscribe(
        (data: any) => {
          this.populaDadosForm(data, form);
        }
      );
    }
  }

  populaDadosForm(dados: any, formulario: any) {
    // formulario.setValue({
    //   nome: formulario.value.nome,
    //   email: formulario.value.email,
    //   endereco: {
    //     rua: dados.logradouro,
    //     cep: dados.cep,
    //     numero: '',
    //     complemento: dados.complemento,
    //     bairro: dados.bairro,
    //     cidade: dados.localidade,
    //     estado: dados.uf
    //   }
    // });
    formulario.form.patchValue({
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

  resetaDadosForm(formulario: any) {
    formulario.form.patchValue({
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
}
