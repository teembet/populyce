import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CashAllocationPageRoutingModule } from './cash-allocation-routing.module';

import { CashAllocationPage } from './cash-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CashAllocationPageRoutingModule
  ],
  declarations: [CashAllocationPage]
})
export class CashAllocationPageModule {}
