import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TransferOneTimePageRoutingModule } from './transfer-one-time-routing.module';

import { TransferOneTimePage } from './transfer-one-time.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TransferOneTimePageRoutingModule
  ],
  declarations: [TransferOneTimePage]
})
export class TransferOneTimePageModule {}
