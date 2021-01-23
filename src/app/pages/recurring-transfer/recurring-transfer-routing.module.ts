import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecurringTransferPage } from './recurring-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: RecurringTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecurringTransferPageRoutingModule {}
