import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FirstWithTabsPageRoutingModule } from './first-with-tabs-routing.module';

import { FirstWithTabsPage } from './first-with-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FirstWithTabsPageRoutingModule
  ],
  declarations: [FirstWithTabsPage]
})
export class FirstWithTabsPageModule {}
