import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

import { PayvueserviceService } from "./../../services/payvueservice.service";
@Component({
  selector: "app-transfer-one-time",
  templateUrl: "./transfer-one-time.page.html",
  styleUrls: ["./transfer-one-time.page.scss"],
})
export class TransferOneTimePage implements OnInit {
  amount: boolean = false;
  amountinput: any;
  cashinput: any;
  stockinput: any;
  loaninput: any;

  account: any;

  constructor(
    private navCtrl: NavController,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}
  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  transfer() {
    this.amount = true;
  }

  goback() {
    this.amount = false;
  }

  async proceedShare() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();
    const obj = {
      amount: this.amountinput,
      is_reoccurrence: false,
    };

    const api = `fund_account`;
    this.vue
      .apiCall(api, "post", obj)
      .then((data) => {
        if (data.error == 0) {
          loading.dismiss();

          this.navCtrl.navigateRoot("menu/first");

          this.present(data.message);
        } else if (data.error == 1) this.present(data.message);
        loading.dismiss();
      })
      .catch((error) => {
        loading.dismiss();
        this.present(
          error.error.message ? error.error.message : "Network Issue",
          "Error"
        );
      });
  }

  async present(data: string, header = "confirm") {
    const alert = await this.alertController.create({
      header,
      message: data,
      buttons: [
        {
          text: "Okay",
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
