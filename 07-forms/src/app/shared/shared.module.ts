import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { EstadosService } from './services/estados.service';

@NgModule({
  declarations: [
    FormDebugComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent
  ],
  providers: [
    EstadosService
  ]
})
export class SharedModule { }
