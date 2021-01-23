import { Component, OnInit } from "@angular/core";
import { UserAccount } from "src/app/interfaces/useraccount";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { PayvueserviceService } from "./../../services/payvueservice.service";
import { GeneralService } from "src/app/services/general/general.service";
@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.page.html",
  styleUrls: ["./sign-up.page.scss"],
})
export class SignUpPage implements OnInit {
  first: boolean = true;
  name: any;
  confirm_password: any;
  password: any;
  age: any = "1990-02-19";
  phone: any;
  account: any;
  token: any;
  registered: boolean = false;
  userAccount: UserAccount;
  tokeninput: any;
  last_time;
  country;
  city;
  gender;
  email: any;

  constructor(
    private navCtrl: NavController,
    private generalSrvc: GeneralService,
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {}

  goback() {
    this.first = true;
  }
  goforward() {
    this.first = false;
  }
  checkPasswords() {
    if (this.password !== this.confirm_password) {
      return false;
    }
    return true;
  }

  async clickSubmit() {
    if (this.checkPasswords()) {
      const loading = await this.loadingController.create({
        mode: "ios",
        translucent: true,
        message: "Please wait...",
      });
      loading.present();
      const obj = {
        email: this.email,
        password: this.password,
        confirm_password: this.confirm_password,
        phone: this.phone,
        name: this.name,
        last_time: this.last_time,
        country: this.country,
        city: this.city,
        gender: this.gender,
        age: this.age,
      };
      const api = `register`;
      this.vue.apiCall(api, "post", obj).then(
        async (data) => {
          loading.dismiss();
          if (data.error == 0) {
            await this.generalSrvc.setStorage(
              "user_details",
              JSON.stringify(data.data)
            );
            this.navCtrl.navigateRoot("one-time-transfer");
            this.present(data.message);
          } else if (data.error == 1) {
            this.present(data.message);
          }
        },
        (error) => {
          this.present(
            error.error.message ? error.error.message : "Network Issue"
          );
          loading.dismiss();
        }
      );
    } else {
      this.present("please recheck password");
    }
  }

  async present(data: string) {
    const alert = await this.alertController.create({
      header: "Confirm!",
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

  login() {
    this.navCtrl.navigateRoot("login");
  }
}
