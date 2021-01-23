import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecurringTransferPageRoutingModule } from './recurring-transfer-routing.module';

import { RecurringTransferPage } from './recurring-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecurringTransferPageRoutingModule
  ],
  declarations: [RecurringTransferPage]
})
export class RecurringTransferPageModule {}
