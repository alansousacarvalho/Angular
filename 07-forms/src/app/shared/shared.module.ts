import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FormDebugComponent } from '../shared/form-debug/form-debug.component';
import { EstadosService } from './services/estados.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    FormDebugComponent,
    ErrorMsgComponent,
    InputFieldComponent
  ],
  providers: [
    EstadosService
  ]
})
export class SharedModule { }
