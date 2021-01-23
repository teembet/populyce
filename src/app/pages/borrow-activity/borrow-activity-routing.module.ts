import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BorrowActivityPage } from './borrow-activity.page';

const routes: Routes = [
  {
    path: '',
    component: BorrowActivityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BorrowActivityPageRoutingModule {}
