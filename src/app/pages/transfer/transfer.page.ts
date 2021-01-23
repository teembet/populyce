import { Component, OnInit } from "@angular/core";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { NavController } from "@ionic/angular";

import {
  MenuController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

import { AuthServiceService } from "./../../services/auth-service.service";

import { any } from "@amcharts/amcharts4/.internal/core/utils/Array";
import { PayvueserviceService } from "./../../services/payvueservice.service";

@Component({
  selector: "app-transfer",
  templateUrl: "./transfer.page.html",
  styleUrls: ["./transfer.page.scss"],
})
export class TransferPage implements OnInit {
  here: boolean;
  amounts: any;
  total: any;
  constructor(
    private navCtrl: NavController,

    private menu: MenuController,
    private vue: PayvueserviceService,
    private authService: AuthServiceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getSummary();
  }

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }
  move_money() {
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
          //this.present(data.message);
          this.here = true;
          this.amounts = data.data;

          this.total =
            parseInt(this.amounts.amount) + parseInt(this.amounts.borrow);
        } else {
          this.present(data.message);
        }
      },
      (error) => {
        this.present("Network Issue");
        loading.dismiss();
      }
    );
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  async present(data: string) {
    const alert = await this.alertController.create({
      header: "Confirm!",
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
