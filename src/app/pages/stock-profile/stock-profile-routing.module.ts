import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { StockProfilePage } from "./stock-profile.page";
const routes: Routes = [
  {
    path: "",
    component: StockProfilePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockProfilePageRoutingModule {}
