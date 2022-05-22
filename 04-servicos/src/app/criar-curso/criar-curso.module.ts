import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CriarCursoComponent } from '.';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado';

@NgModule({
  declarations: [
    CriarCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  // providers: [
  //   CursosService
  // ],
  exports:[
    CriarCursoComponent
  ]
})
export class CriarCursoModule { }
