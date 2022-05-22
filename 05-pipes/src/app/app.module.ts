import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import '@angular/common/locales/global/pt';

import { AppComponent, CamelCasePipe, SettingsService, FiltroArrayPipe, FiltroArrayImpuroPipe } from '.';
import { ExemploPipesComponent } from './exemplo-pipes';

@NgModule({
  declarations: [
    AppComponent,
    ExemploPipesComponent,
    CamelCasePipe,
    FiltroArrayPipe,
    FiltroArrayImpuroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SettingsService,
    // {
    //   provide: LOCALE_ID,
    //   useValue: 'pt'
    // }
    {
      provide: LOCALE_ID,
      deps: [SettingsService],
      useFactory: (settingsService: any) => settingsService.getLocale()
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
