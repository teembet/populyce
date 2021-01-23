import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneTimeTransferPage } from './one-time-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: OneTimeTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneTimeTransferPageRoutingModule {}
