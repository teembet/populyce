import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundsPortfolioPageRoutingModule } from './funds-portfolio-routing.module';

import { FundsPortfolioPage } from './funds-portfolio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundsPortfolioPageRoutingModule
  ],
  declarations: [FundsPortfolioPage]
})
export class FundsPortfolioPageModule {}
