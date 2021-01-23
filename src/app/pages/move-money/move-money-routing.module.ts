import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoveMoneyPage } from './move-money.page';

const routes: Routes = [
  {
    path: '',
    component: MoveMoneyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoveMoneyPageRoutingModule {}
