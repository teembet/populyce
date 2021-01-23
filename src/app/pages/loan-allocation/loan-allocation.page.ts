import { Component, OnInit } from "@angular/core";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-loan-allocation",
  templateUrl: "./loan-allocation.page.html",
  styleUrls: ["./loan-allocation.page.scss"],
})
export class LoanAllocationPage implements OnInit {
  amounts: any;
  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.amounts = this.router.getCurrentNavigation().extras.state.amounts;
      } else {
        this.navCtrl.back();
      }
    });
  }

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  calculate() {
    return (
      parseInt(this.amounts.loan) +
      (this.amounts.loan / 100) * 6
    ).toFixed(2);
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

    const api = `get_fund_history`;
    this.vue.apiCall(api).then(
      (data) => {
        loading.dismiss();
        if (data.success) {
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
