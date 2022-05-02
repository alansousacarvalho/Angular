import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CursosComponent,
  CursoDetalheComponent,
  CursosService,
  CursoNaoEncontradoComponent
 } from '.';
import { CursosRoutingModule } from './cursos.routing.module';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  providers: [
    CursosService
  ]
})
export class CursosModule { }
