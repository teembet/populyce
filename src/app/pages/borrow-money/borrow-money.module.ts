import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowMoneyPageRoutingModule } from './borrow-money-routing.module';

import { BorrowMoneyPage } from './borrow-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowMoneyPageRoutingModule
  ],
  declarations: [BorrowMoneyPage]
})
export class BorrowMoneyPageModule {}
