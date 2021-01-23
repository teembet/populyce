import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

import { PayvueserviceService } from "./../../services/payvueservice.service";

import {
  MenuController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

@Component({
  selector: "app-borrow-money",
  templateUrl: "./borrow-money.page.html",
  styleUrls: ["./borrow-money.page.scss"],
})
export class BorrowMoneyPage implements OnInit {
  amountInput: number;
  amounts: any;
  here: boolean;
  constructor(
    private navCtrl: NavController,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.getSummary();
  }
  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
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

  async borrow() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();
    const obj = {
      amount: this.amountInput,
    };
    const api = `borrow_fund`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.present(data.message);

          this.navCtrl.navigateForward("borrow-activity");
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
}
