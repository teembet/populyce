import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanAllocationPageRoutingModule } from './loan-allocation-routing.module';

import { LoanAllocationPage } from './loan-allocation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanAllocationPageRoutingModule
  ],
  declarations: [LoanAllocationPage]
})
export class LoanAllocationPageModule {}
