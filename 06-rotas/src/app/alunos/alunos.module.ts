import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AlunosComponent, AlunosRoutingModule, AlunosService, AlunoDetalheResolve } from '.';
import { AlunoFormComponent } from './aluno-form';
import { AlunoDetalheComponent } from './aluno-detalhe';
import { AlunosDeactivateGuard } from '../guards';

@NgModule({
  declarations: [
    AlunosComponent,
    AlunoFormComponent,
    AlunoDetalheComponent
  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    FormsModule
  ],
  providers: [
    AlunosService,
    AlunosDeactivateGuard,
    AlunoDetalheResolve
  ]
})
export class AlunosModule { }
