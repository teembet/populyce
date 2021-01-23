import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExternalBankPageRoutingModule } from './external-bank-routing.module';

import { ExternalBankPage } from './external-bank.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExternalBankPageRoutingModule
  ],
  declarations: [ExternalBankPage]
})
export class ExternalBankPageModule {}
