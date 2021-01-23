import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundAllocationPageRoutingModule } from './fund-allocation-routing.module';

import { FundAllocationPage } from './fund-allocation.page';
import { HighchartsChartComponent } from 'highcharts-angular';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundAllocationPageRoutingModule
  ],
  declarations: [FundAllocationPage,HighchartsChartComponent]
})
export class FundAllocationPageModule {}
