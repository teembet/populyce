import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { StockProfilePageRoutingModule } from "./stock-profile-routing.module";

import { StockProfilePage } from "./stock-profile.page";
import { IonicSelectableModule } from "ionic-selectable";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StockProfilePageRoutingModule,
    IonicSelectableModule,
  ],
  declarations: [StockProfilePage],
})
export class StockProfilePageModule {}
