import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

import { AlertController, LoadingController } from "@ionic/angular";

import { PayvueserviceService } from "./../../services/payvueservice.service";

@Component({
  selector: "app-external-bank",
  templateUrl: "./external-bank.page.html",
  styleUrls: ["./external-bank.page.scss"],
})
export class ExternalBankPage implements OnInit {
  here: boolean;
  amounts: any;
  constructor(
    private navCtrl: NavController,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getSummary();
  }

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  withdraw() {
    this.navCtrl.navigateForward("withdraw");
  }

  deposit() {
    this.navCtrl.navigateForward("move-money");
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

  async present(data: string, header = "Confirm!") {
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

  doRefresh(event) {
    console.log("Begin async operation");

    setTimeout(() => {
      console.log("Async operation has ended");
      this.getSummary();
      event.target.complete();
    }, 2000);
  }
}
