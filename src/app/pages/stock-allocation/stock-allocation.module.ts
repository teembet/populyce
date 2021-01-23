import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockAllocationPageRoutingModule } from './stock-allocation-routing.module';

import { StockAllocationPage } from './stock-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockAllocationPageRoutingModule
  ],
  declarations: [StockAllocationPage]
})
export class StockAllocationPageModule {}
