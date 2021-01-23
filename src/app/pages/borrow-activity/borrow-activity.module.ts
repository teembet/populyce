import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorrowActivityPageRoutingModule } from './borrow-activity-routing.module';

import { BorrowActivityPage } from './borrow-activity.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorrowActivityPageRoutingModule
  ],
  declarations: [BorrowActivityPage]
})
export class BorrowActivityPageModule {}
