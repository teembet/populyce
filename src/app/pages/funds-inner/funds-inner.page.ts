import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";
import { NavigationExtras, Router } from "@angular/router";

@Component({
  selector: "app-funds-inner",
  templateUrl: "./funds-inner.page.html",
  styleUrls: ["./funds-inner.page.scss"],
})
export class FundsInnerPage implements OnInit {
  here: boolean;
  amounts: any;
  inflation = 1.8;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.getSummary();
  }

  calculate() {
    return (
      parseInt(this.amounts.loan) +
      (this.amounts.loan / 100) * (6 - this.inflation)
    ).toFixed(2);
  }

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  cash_allocation() {
    let navigationExtras: NavigationExtras = {
      state: {
        amounts: this.amounts,
      },
    };

    this.router.navigate(
      ["menu/first/tabs/funds/fund-inner/cash_allocation"],
      navigationExtras
    );
  }

  loan_allocation() {
    let navigationExtras: NavigationExtras = {
      state: {
        amounts: this.amounts,
      },
    };

    this.router.navigate(
      ["menu/first/tabs/funds/fund-inner/loan_allocation"],
      navigationExtras
    );
  }

  stock_allocation() {
    let navigationExtras: NavigationExtras = {
      state: {
        amounts: this.amounts,
      },
    };

    this.router.navigate(
      ["menu/first/tabs/funds/fund-inner/stock_allocation"],
      navigationExtras
    );
  }

  async getSummary() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const api = `get_fund`;
    this.vue.apiCall(api).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.here = true;
          this.amounts = data.data;
        } else {
          this.present(data.message);
        }
      },
      (error) => {
        this.present(
          error.error.message ? error.error.message : "Network Issue",
          "Error"
        );
        loading.dismiss();
      }
    );
  }

  async present(data: string, header = "Confirm") {
    const alert = await this.alertController.create({
      header,
      message: data,
      buttons: [
        {
          text: "Okay",
          handler: () => {
            //console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }
}
