import { Component, OnInit } from "@angular/core";
import {
  NavController,
  ToastController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";

@Component({
  selector: "app-funds-portfolio",
  templateUrl: "./funds-portfolio.page.html",
  styleUrls: ["./funds-portfolio.page.scss"],
})
export class FundsPortfolioPage implements OnInit {
  here: boolean;
  amounts: any;
  loan_div: boolean;
  cash_div: boolean;
  cash_amount: any;
  cash_select: any = "loan";
  loan_amount: number;
  loan_select: any = "cash";
  constructor(
    private navCtrl: NavController,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController
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

  cash() {
    this.cash_div = !this.cash_div;
  }

  loan() {
    this.loan_div = !this.loan_div;
  }

  async move_fund(from, to) {
    let amount = 0;

    if (from == "loan") {
      if (!this.cash_amount) {
        const toast = await this.toastController.create({
          message: "Please fill in the amount",
          duration: 2000,
          color: "danger",
        });
        return toast.present();
      }

      if (this.cash_amount == 0) {
        const toast = await this.toastController.create({
          message: "Amount cant be 0",
          duration: 2000,
          color: "danger",
        });
        return toast.present();
      }

      amount = this.cash_amount;
    } else {
      if (!this.loan_amount) {
        const toast = await this.toastController.create({
          message: "Please fill in the amount",
          duration: 2000,
          color: "danger",
        });
        return toast.present();
      }

      if (this.loan_amount == 0) {
        const toast = await this.toastController.create({
          message: "Amount cant be 0",
          duration: 2000,
          color: "danger",
        });
        return toast.present();
      }

      amount = this.loan_amount;
    }

    const loading = await this.loadingController.create({
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const obj = {
      from,
      to,
      amount,
    };

    const api = `move_fund`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();

        if (data.error == 0) {
          this.loan_div = false;
          this.cash_div = false;
          this.getSummary();
          this.present(data.message);
        } else if (data.error == 1) {
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
