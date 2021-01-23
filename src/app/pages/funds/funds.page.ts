import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";

@Component({
  selector: "app-funds",
  templateUrl: "./funds.page.html",
  styleUrls: ["./funds.page.scss"],
})
export class FundsPage implements OnInit {
  amounts: any;
  here: boolean;
  inflation = 1.8;

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

  fund_inner() {
    this.navCtrl.navigateForward("menu/first/tabs/funds/fund-inner");
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

  doRefresh(event) {
    setTimeout(() => {
      this.getSummary();
      event.target.complete();
    }, 2000);
  }
}
