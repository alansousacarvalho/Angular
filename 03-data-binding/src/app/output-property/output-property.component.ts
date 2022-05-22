import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  /* Input Property */
  @Input() valor = 0;
  /* OutInput Property */
  @Output() mudouValor = new EventEmitter();

  /* ViewChild */
  @ViewChild('campoInput', {static: false}) campoValorInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  /** Incrementa com Input/OutPut Property */
  incrementa() {
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor});
  }

  /** Decrementa com Input/OutPut Property */
  decrementa() {
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor});
  }

  /** Incrementa com ViewChild */
  incrementaChild() {
    this.campoValorInput.nativeElement.value++;
    console.log(this.campoValorInput.nativeElement.value);
  }

  /** Decrementa com ViewChild */
  decrementaChild() {
    this.campoValorInput.nativeElement.value--;
    console.log(this.campoValorInput.nativeElement.value);
  }
}
