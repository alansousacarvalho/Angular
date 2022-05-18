import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { tap } from 'rxjs/operators';
import { EnviarValorService } from 'src/app/shared/services/enviar-valor.service';
@Component({
  selector: 'app-poc-async',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor$" estilo="bg-success">
    </app-poc-base>
  `
})
export class PocAsyncComponent implements OnInit, OnDestroy {

  nome = 'Componente com async';
  valor$!: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {
    this.service.getValor()
      .pipe(tap(v => console.log(this.nome, v)))
  }

  ngOnDestroy() {
    console.log(`${this.nome} foi destruido.`);
  }

}
