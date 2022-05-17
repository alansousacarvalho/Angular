import { Component, OnInit } from '@angular/core';

import { EnviarValorService } from 'src/app/shared/services/enviar-valor.service';

@Component({
  selector: 'app-unsubscribe-rxjs',
  templateUrl: './unsubscribe-rxjs.component.html',
  styleUrls: ['./unsubscribe-rxjs.component.scss']
})
export class UnsubscribeRxjsComponent implements OnInit {
  mostrarComponentes = true;

  constructor(private enviarValorService: EnviarValorService) { }

  ngOnInit(): void {
  }

  emitirValor(valor: string) {
    this.enviarValorService.emitirValor(valor);
  }

  destruirComponentes() {
    this.mostrarComponentes = !this.mostrarComponentes;
  }
}
