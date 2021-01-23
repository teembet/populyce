import { Component, OnInit } from "@angular/core";
import { PayvueserviceService } from "./../../services/payvueservice.service";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

@Component({
  selector: "app-payback",
  templateUrl: "./payback.page.html",
  styleUrls: ["./payback.page.scss"],
})
export class PaybackPage implements OnInit {
  amountInput: number;
  amounts: any;
  show: boolean = true;
  here: boolean;
  day: any;
  freq: any;
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

  switch() {
    this.show = false;
  }

  onetime() {
    this.show = true;
  }

  async schedule() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const obj = {
      amount: this.amountInput,
      is_reoccurrence: true,
      range: this.freq,
    };
    const api = `borrow_repay`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.here = true;
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

  async pay() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const obj = {
      amount: this.amountInput,
      is_reoccurrence: false,
      // range: this.freq
    };
    const api = `borrow_repay`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();
        if (data.error == 0) {
          this.navCtrl.navigateForward("borrow-activity");
          this.here = true;
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
        this.present("Network Issue");
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
          handler: () => {},
        },
      ],
    });

    await alert.present();
  }
}
