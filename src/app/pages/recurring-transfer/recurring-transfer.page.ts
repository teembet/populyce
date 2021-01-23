import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";
@Component({
  selector: "app-recurring-transfer",
  templateUrl: "./recurring-transfer.page.html",
  styleUrls: ["./recurring-transfer.page.scss"],
})
export class RecurringTransferPage implements OnInit {
  amount: boolean = false;
  amountinput: any;
  cashinput: any;
  stockinput: any;
  loaninput: any;
  frequency;
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

  async schedule() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();
    const obj = {
      amount: this.amountinput,
      is_reoccurrence: true,
      range: this.frequency,
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
