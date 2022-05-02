import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppRoutingModule } from './app.routing.module';
import { AuthService } from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { CursoGuard } from './guards/curso.guard';
import { AlunosGuard } from './guards/alunos.guard';
//import { CursosModule } from './cursos';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //CursosModule,
    // AlunosModule
  ],
  providers: [
    AuthService,
    AuthGuard,
    CursoGuard,
    AlunosGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
