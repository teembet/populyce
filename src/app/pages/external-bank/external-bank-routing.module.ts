import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExternalBankPage } from './external-bank.page';

const routes: Routes = [
  {
    path: '',
    component: ExternalBankPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExternalBankPageRoutingModule {}
