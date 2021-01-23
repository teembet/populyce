import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowMoneyPage } from './borrow-money.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowMoneyPageRoutingModule {}
