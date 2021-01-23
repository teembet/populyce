import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { AlertController, LoadingController } from "@ionic/angular";

import { PayvueserviceService } from "./../../services/payvueservice.service";
@Component({
  selector: "app-borrow-activity",
  templateUrl: "./borrow-activity.page.html",
  styleUrls: ["./borrow-activity.page.scss"],
})
export class BorrowActivityPage implements OnInit {
  amountInput: number;
  amounts: any;
  here: boolean;
  borrow: any;

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

    const api = `get_borrow`;
    this.vue.apiCall(api).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.here = true;
          this.borrow = data.data;
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
  async present(data: string, header: string = "Confirm") {
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

  borrow_money() {
    this.navCtrl.navigateForward("borrow-money");
  }
  payback() {
    this.navCtrl.navigateForward("payback");
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
