import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashAllocationPage } from './cash-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: CashAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CashAllocationPageRoutingModule {}
