import { Component, OnInit } from '@angular/core';

import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrls: ['./exemplo-pipes.component.css']
})
export class ExemploPipesComponent implements OnInit {

  //Tipos Pipes
  livro: any = {
    titulo: 'A princesa salva a si mesma neste livro',
    rating: 4.54321,
    numeroPaginas: 314,
    preco: 44.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://amzn.to/3pVwpKU'
  };
  //Pipe Puro/Impuro
  livros: string[] = ['Java', 'Angular 2'];
  filtro: any;
  //Async
  valorAsync = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Valor assíncrono'), 2000);
  });

  valorAsync2 = interval(2000).pipe(map(valor => 'valor assíncrono 2'))

  constructor() { }

  ngOnInit(): void {
  }

  addCurso(valor: any) {
    this.livros.push(valor);
  }

  obterCursos() {
    if (this.livros.length === 0 || this.filtro === undefined || this.filtro.trim() === '') {
      return this.livros;
    }

    /**
     * Exemplo de Filtro em array
     */
    return this.livros.filter((v: any) => {
      if (v.toLocaleLowerCase().indexOf(this.filtro.toLocaleLowerCase()) >= 0) {
        return true;
      }
      return false;
    });
  }

}
