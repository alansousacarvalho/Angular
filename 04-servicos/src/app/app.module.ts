import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CursosService, LogService } from './shared';
import { CriarCursoModule } from './criar-curso';
import { CursosModule } from './cursos';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CriarCursoModule,
    CursosModule
  ],
  providers: [
    CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
