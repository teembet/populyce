import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockAllocationPage } from './stock-allocation.page';

const routes: Routes = [
  {
    path: '',
    component: StockAllocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockAllocationPageRoutingModule {}
