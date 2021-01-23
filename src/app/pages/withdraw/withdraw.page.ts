import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";

@Component({
  selector: "app-withdraw",
  templateUrl: "./withdraw.page.html",
  styleUrls: ["./withdraw.page.scss"],
})
export class WithdrawPage implements OnInit {
  here: boolean;
  amounts: any;
  total: any;
  destination: any;
  withdraw_amount: any;
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

  async withdraw() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const obj = {
      amount: this.withdraw_amount,
      from: this.destination,
    };

    const api = `withdraw_fund`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.navCtrl.navigateForward("external-bank");
          this.here = true;

          this.present(data.message);
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
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
