import { Component, OnInit } from "@angular/core";
import { UserAccount } from "src/app/interfaces/useraccount";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { FormGroup } from "@angular/forms";
import { PayvueserviceService } from "./../../services/payvueservice.service";
@Component({
  selector: "app-one-time-transfer",
  templateUrl: "./one-time-transfer.page.html",
  styleUrls: ["./one-time-transfer.page.scss"],
})
export class OneTimeTransferPage implements OnInit {
  amount: boolean = false;
  amountinput: any;
  cashinput: any;
  stockinput: any;
  loaninput: any;
  formSignUp: FormGroup;
  account: any;
  userAccount: UserAccount;
  constructor(
    private navCtrl: NavController,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.present(
      "This is where to to input the amount to fund, amount should be between $1 to $20000",
      "Message"
    );
  }

  goback() {
    this.amount = false;
  }

  proceedAmount() {
    if (
      !this.amountinput ||
      this.amountinput == 0 ||
      this.amountinput > 20000
    ) {
      return this.present("Amount should be between $1 to $20000", "Error");
    }
    this.amount = true;
    this.present(
      `This is where the you decides how to split your fund.
    \n - Cash is money that is stored in a bank
    \n - Loan is money that is lent out to others a gain interest over time
    Also note that the numbers must be 100 in total when added`,
      "Message"
    );
  }

  checkpercent() {
    if (this.loaninput + this.cashinput != 100) {
      return false;
    }
    return true;
  }

  async proceedShare() {
    if (this.checkpercent()) {
      const loading = await this.loadingController.create({
        mode: "ios",
        translucent: true,
        message: "Please wait...",
      });
      loading.present();
      const obj = {
        amount: this.amountinput,
        loan: this.loaninput,
        cash: this.cashinput,
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
    } else {
      this.present("Allocation must add up to 100%");
    }
  }

  async present(data: string, header = "Confirm") {
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
}
