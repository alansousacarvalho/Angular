import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DiretivaNgifComponent } from './diretiva-ngif';
import { TesteStyleComponent } from './teste-style';
import { NgSwitchComponent } from './ng-switch';
import { NgForComponent } from './ng-for';
import { NgClassComponent } from './ng-class';
import { NgStyleComponent } from './ng-style';
import { OperadorElvisComponent } from './operador-elvis';
import { NgContentComponent } from './ng-content';
import { DiretivasCustomizadasComponent } from './diretivas-customizadas';
import { FundoAmareloDirective, HighlightMouseDirective } from './shared';

@NgModule({
  declarations: [
    AppComponent,
    DiretivaNgifComponent,
    TesteStyleComponent,
    NgSwitchComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    OperadorElvisComponent,
    NgContentComponent,
    FundoAmareloDirective,
    DiretivasCustomizadasComponent,
    HighlightMouseDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
