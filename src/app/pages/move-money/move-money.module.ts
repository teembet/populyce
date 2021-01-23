import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoveMoneyPageRoutingModule } from './move-money-routing.module';

import { MoveMoneyPage } from './move-money.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoveMoneyPageRoutingModule
  ],
  declarations: [MoveMoneyPage]
})
export class MoveMoneyPageModule {}
