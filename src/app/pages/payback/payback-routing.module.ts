import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaybackPage } from './payback.page';

const routes: Routes = [
  {
    path: '',
    component: PaybackPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaybackPageRoutingModule {}
