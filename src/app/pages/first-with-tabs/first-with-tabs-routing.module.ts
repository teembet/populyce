import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FirstWithTabsPage } from "./first-with-tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: FirstWithTabsPage,
    children: [
      {
        path: "funds",
        loadChildren: () =>
          import("../funds/funds.module").then((m) => m.FundsPageModule),
      },
      {
        path: "transfer",
        loadChildren: () =>
          import("../transfer/transfer.module").then(
            (m) => m.TransferPageModule
          ),
      },
      {
        path: "borrow",
        loadChildren: () =>
          import("../borrow/borrow.module").then((m) => m.BorrowPageModule),
      },
      {
        path: "manage",
        loadChildren: () =>
          import("../manage/manage.module").then((m) => m.ManagePageModule),
      },
      {
        path: "funds/fund-inner",
        loadChildren: () =>
          import("../funds-inner/funds-inner.module").then(
            (m) => m.FundsInnerPageModule
          ),
      },
      {
        path: "funds/fund-inner/cash_allocation",
        loadChildren: () =>
          import("../fund-allocation/fund-allocation.module").then(
            (m) => m.FundAllocationPageModule
          ),
      },
      {
        path: "funds/fund-inner/loan_allocation",
        loadChildren: () =>
          import("../loan-allocation/loan-allocation.module").then(
            (m) => m.LoanAllocationPageModule
          ),
      },
      {
        path: "funds/fund-inner/stock_allocation",
        loadChildren: () =>
          import("../stock-allocation/stock-allocation.module").then(
            (m) => m.StockAllocationPageModule
          ),
      },

      {
        path: "transfer/details",
        loadChildren: () =>
          import("../details/details.module").then((m) => m.DetailsPageModule),
      },
    ],
  },
  {
    path: "",
    redirectTo: "tabs/funds",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstWithTabsPageRoutingModule {}
