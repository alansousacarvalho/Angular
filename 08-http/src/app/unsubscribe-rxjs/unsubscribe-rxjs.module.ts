import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnsubscribeRxjsRoutingModule } from './unsubscribe-rxjs-routing.module';
import { PocBaseComponent } from './poc-base/poc-base.component';
import { PocComponent } from './components/poc.component';
import { PocTakeUntilComponent } from './components/poc-take-until.component';
import { PocAsyncComponent } from './components/poc-async.component';
import { PocTakeComponent } from './components/poc-take.component';
import { PocUnsubComponent } from './components/poc-unsub.component';
import { UnsubscribeRxjsComponent } from './unsubscribe-poc/unsubscribe-rxjs.component';

@NgModule({
  imports: [
    CommonModule,
    UnsubscribeRxjsRoutingModule
  ],
  declarations: [
    UnsubscribeRxjsComponent,
    PocComponent,
    PocAsyncComponent,
    PocTakeUntilComponent,
    PocTakeComponent,
    PocUnsubComponent,
    PocBaseComponent
  ]
})
export class UnsubscribeRxjsModule {}
