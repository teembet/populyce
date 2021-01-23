import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransferOneTimePage } from './transfer-one-time.page';

const routes: Routes = [
  {
    path: '',
    component: TransferOneTimePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransferOneTimePageRoutingModule {}
