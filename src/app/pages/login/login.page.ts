import { Component, OnInit } from "@angular/core";
import { UserAccount } from "src/app/interfaces/useraccount";
import {
  NavController,
  AlertController,
  LoadingController,
} from "@ionic/angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { PayvueserviceService } from "./../../services/payvueservice.service";

import { Plugins } from "@capacitor/core";
import { GeneralService } from "src/app/services/general/general.service";

const { Storage } = Plugins;

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  formSignIn: FormGroup;
  account: any;
  userAccount: UserAccount;
  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder,
    private generalSrvc: GeneralService,

    private vue: PayvueserviceService,

    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  ngOnInit() {
    this.signInFb();
  }

  signInFb() {
    this.formSignIn = this.fb.group({
      email: ["", Validators.compose([Validators.required, Validators.email])],
      password: [
        "",
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
    });
  }

  async login() {
    this.account = Object.assign({}, this.formSignIn.value);
    if (this.formSignIn.valid) {
      const loading = await this.loadingController.create({
        mode: "ios",
        translucent: true,
        message: "Please wait...",
      });
      loading.present();

      const api = `login`;
      this.vue.apiCall(api, "post", this.account).then(
        async (data) => {
          loading.dismiss();
          if (data.error == 0) {
            await this.generalSrvc.setStorage(
              "user_details",
              JSON.stringify(data.data)
            );

            this.navCtrl.navigateRoot("menu/first");
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
    } else {
      Object.keys(this.formSignIn.controls).forEach((field) => {
        const control = this.formSignIn.get(field);
        control.markAsDirty({ onlySelf: true });
      });
    }
  }

  signup() {
    this.navCtrl.navigateForward("sign-up");
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
