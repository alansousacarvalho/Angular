import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'www.google.com';
  urlImg: string = 'http://lorempixel.com.br/500/400/?1';
  cursoAngular: boolean = true;
  valorAtual: string = '';
  valorSalvo: string = '';
  mouseOverOut: boolean = false;
  nomeCarro: string = 'Palio';
  valorInicial = 5;

  constructor() { }

  ngOnInit(): void {
  }

  getValor() {
    return 1;
  }

  getCurtirCurso() {
    return true;
  }

  botaoClicado() {
    alert('Botão clicado');
  }

  onKeyUp(evento: KeyboardEvent) {
  //  console.log((evento.target as HTMLInputElement).value)
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  salvarValor(valor: any) {
    this.valorSalvo = valor;
  }

  onMouseOverOut() {
    this.mouseOverOut = !this.mouseOverOut;
  }

  onMudouValor(evento: any) {
    console.log(evento.novoValor);
  }



























}
