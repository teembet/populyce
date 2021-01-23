import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundsPortfolioPage } from './funds-portfolio.page';

const routes: Routes = [
  {
    path: '',
    component: FundsPortfolioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundsPortfolioPageRoutingModule {}
