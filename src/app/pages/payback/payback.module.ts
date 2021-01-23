import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaybackPageRoutingModule } from './payback-routing.module';

import { PaybackPage } from './payback.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaybackPageRoutingModule
  ],
  declarations: [PaybackPage]
})
export class PaybackPageModule {}
