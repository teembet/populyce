import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundsInnerPage } from './funds-inner.page';

const routes: Routes = [
  {
    path: '',
    component: FundsInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundsInnerPageRoutingModule {}
