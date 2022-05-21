import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinct, distinctUntilChanged, filter, map, Observable, switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-lib-search',
  templateUrl: './lib-search.component.html',
  styleUrls: ['./lib-search.component.scss']
})
export class LibSearchComponent implements OnInit {
  queryField = new FormControl();
  readonly SEARCH_URL = 'https://api.cdnjs.com/libraries';
  results$!: Observable<any>;
  total!: number;
  FIELDS: string = 'filename,description,version';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.results$ = this.queryField.valueChanges
    .pipe(
      map(value => value.trim()), //remove espaços
      filter(value => value.length > 1), //filtra valores > 1
      debounceTime(200), // delay
      distinctUntilChanged(), //ignora valores repetidos
      // tap(value => console.log(value)),
      switchMap(v => this.http.get(this.SEARCH_URL, { // a busca com os parametros.
        params: {
          search: v,
          fields: this.FIELDS
        }
      })),
      tap((res: any) => this.total = res.total), //total de registro
      map((res: any) => res.results) //Pega do JSON os resultados.
    )
  }

  onSearch() {

    const limit = 10;
    let value = this.queryField.value;
    if (value && (value = value.trim()) !== '') {

      //Se já estiver os parametros.

      // const params = {
      //   search: value,
      //   fields: fields
      // }

      let params = new HttpParams();
      params = params.set('search', value); //Somente 1 valor
      // params = params.set('fields', fields);
      params = params.set('limit', limit);
      // params2.append //+1 valor

      this.results$ = this.http.get(this.SEARCH_URL, { params })
        .pipe(
          tap((res: any) => this.total = res.total),
          map(res => res.results)
        );
    }
  }

}
