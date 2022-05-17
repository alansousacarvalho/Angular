import { Component, OnInit, OnDestroy } from '@angular/core';

import { EnviarValorService } from 'src/app/shared/services/enviar-valor.service';
@Component({
  selector: 'app-poc-take',
  template: `
    <app-poc-base [nome]="nome"
      [valor]="valor" estilo="bg-secondary">
    </app-poc-base>
  `
})
export class PocTakeComponent  implements OnInit {

  nome = 'Componente com take';
  valor?: string;

  constructor(private service: EnviarValorService) { }

  ngOnInit() {

  }

}
