import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnsubscribeRxjsComponent } from './unsubscribe-poc';


const routes: Routes = [
  {
    path: '', component: UnsubscribeRxjsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnsubscribeRxjsRoutingModule { }
