import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneTimeTransferPageRoutingModule } from './one-time-transfer-routing.module';

import { OneTimeTransferPage } from './one-time-transfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    OneTimeTransferPageRoutingModule
  ],
  declarations: [OneTimeTransferPage]
})
export class OneTimeTransferPageModule {}
