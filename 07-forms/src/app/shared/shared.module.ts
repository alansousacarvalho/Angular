import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { FormDebugComponent } from '../shared';
import { InputFieldComponent } from './input-field/input-field.component';
import { ErrorMsgComponent } from './error-msg';
import { EstadosService } from './services';

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
