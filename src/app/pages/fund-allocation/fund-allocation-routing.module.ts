import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundAllocationPage } from './fund-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: FundAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundAllocationPageRoutingModule {}
