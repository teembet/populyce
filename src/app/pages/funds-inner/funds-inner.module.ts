import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundsInnerPageRoutingModule } from './funds-inner-routing.module';

import { FundsInnerPage } from './funds-inner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundsInnerPageRoutingModule
  ],
  declarations: [FundsInnerPage]
})
export class FundsInnerPageModule {}
