import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "welcome",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "menu",
    loadChildren: () =>
      import("./pages/menu/menu.module").then((m) => m.MenuPageModule),
  },
  {
    path: 'funds',
    loadChildren: () => import('./pages/funds/funds.module').then( m => m.FundsPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./pages/transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'manage',
    loadChildren: () => import('./pages/manage/manage.module').then( m => m.ManagePageModule)
  },
  {
    path: 'welcome',
    loadChildren: () => import('./pages/welcome/welcome.module').then( m => m.WelcomePageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./pages/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./pages/reset-password/reset-password.module').then( m => m.ResetPasswordPageModule)
  },
  {
    path: 'activities',
    loadChildren: () => import('./pages/activities/activities.module').then( m => m.ActivitiesPageModule)
  },
  {
    path: 'external-bank',
    loadChildren: () => import('./pages/external-bank/external-bank.module').then( m => m.ExternalBankPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'user-info',
    loadChildren: () => import('./pages/user-info/user-info.module').then( m => m.UserInfoPageModule)
  },
  {
    path: 'move-money',
    loadChildren: () => import('./pages/move-money/move-money.module').then( m => m.MoveMoneyPageModule)
  },
  {
    path: 'fund-allocation',
    loadChildren: () => import('./pages/fund-allocation/fund-allocation.module').then( m => m.FundAllocationPageModule)
  },
  {
    path: 'cash-allocation',
    loadChildren: () => import('./pages/cash-allocation/cash-allocation.module').then( m => m.CashAllocationPageModule)
  },
  {
    path: 'one-time-transfer',
    loadChildren: () => import('./pages/one-time-transfer/one-time-transfer.module').then( m => m.OneTimeTransferPageModule)
  },
  {
    path: 'stock-profile',
    loadChildren: () => import('./pages/stock-profile/stock-profile.module').then( m => m.StockProfilePageModule)
  },
  {
    path: 'loan-allocation',
    loadChildren: () => import('./pages/loan-allocation/loan-allocation.module').then( m => m.LoanAllocationPageModule)
  },
  {
    path: 'recurring-transfer',
    loadChildren: () => import('./pages/recurring-transfer/recurring-transfer.module').then( m => m.RecurringTransferPageModule)
  },
  {
    path: 'stock-allocation',
    loadChildren: () => import('./pages/stock-allocation/stock-allocation.module').then( m => m.StockAllocationPageModule)
  },
  {
    path: 'funds-inner',
    loadChildren: () => import('./pages/funds-inner/funds-inner.module').then( m => m.FundsInnerPageModule)
  },
  {
    path: 'funds-portfolio',
    loadChildren: () => import('./pages/funds-portfolio/funds-portfolio.module').then( m => m.FundsPortfolioPageModule)
  },  {
    path: 'transfer-one-time',
    loadChildren: () => import('./pages/transfer-one-time/transfer-one-time.module').then( m => m.TransferOneTimePageModule)
  },
  {
    path: 'borrow-money',
    loadChildren: () => import('./pages/borrow-money/borrow-money.module').then( m => m.BorrowMoneyPageModule)
  },
  {
    path: 'borrow-activity',
    loadChildren: () => import('./pages/borrow-activity/borrow-activity.module').then( m => m.BorrowActivityPageModule)
  },
  {
    path: 'payback',
    loadChildren: () => import('./pages/payback/payback.module').then( m => m.PaybackPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./pages/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },

 

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
