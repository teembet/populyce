import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanAllocationPage } from './loan-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: LoanAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoanAllocationPageRoutingModule {}
