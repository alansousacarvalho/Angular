import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosComponent } from '.';
// import { CursosService } from '../shared/services/curso.service';

@NgModule({
  declarations: [
    CursosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CursosComponent
  ],
  // providers: [
  //   CursosService
  // ]
})
export class CursosModule { }
