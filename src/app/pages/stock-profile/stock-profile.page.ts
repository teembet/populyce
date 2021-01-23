import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavController, ToastController } from "@ionic/angular";

import {
  MenuController,
  AlertController,
  LoadingController,
} from "@ionic/angular";

import { AuthServiceService } from "./../../services/auth-service.service";

import { PayvueserviceService } from "./../../services/payvueservice.service";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { IonicSelectableComponent } from "ionic-selectable";

@Component({
  selector: "app-stock-profile",
  templateUrl: "./stock-profile.page.html",
  styleUrls: ["./stock-profile.page.scss"],
})
export class StockProfilePage implements OnInit, OnDestroy {
  stock_amount: number;
  stock_select: any;
  stock_div: boolean;
  stocks: any;
  here: boolean;
  selected: any;
  stock_info: any;
  stock_name;
  interval;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController,
    private vue: PayvueserviceService,
    private authService: AuthServiceService,
    private alertController: AlertController,
    public loadingController: LoadingController,
    private toastController: ToastController
  ) {
    this.getSummary();

    this.interval = setInterval(() => {
      this.Summary();
    }, 30000);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  stock() {
    this.stock_div = !this.stock_div;
  }

  async buy_stock() {
    let amount = 0;

    if (!this.stock_amount) {
      const toast = await this.toastController.create({
        message: "Please fill in the amount",
        duration: 2000,
        color: "danger",
      });
      return toast.present();
    }

    if (this.stock_amount == 0) {
      const toast = await this.toastController.create({
        message: "Amount cant be 0",
        duration: 2000,
        color: "danger",
      });
      return toast.present();
    }

    if (!this.stock_select) {
      const toast = await this.toastController.create({
        message: "Select where to fund from",
        duration: 2000,
        color: "danger",
      });
      return toast.present();
    }

    const loading = await this.loadingController.create({
      // mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const obj = {
      from: this.stock_select,
      name: this.stock_name,
      amount: this.stock_amount,
      stock_price: this.filter_price(this.stock_name),
    };
    console.log(this.filter_price(this.stock_name));
    const api = `buy_stock`;
    this.vue.apiCall(api, "post", obj).then(
      (data) => {
        loading.dismiss();

        if (data.error == 0) {
          this.stock_div = false;

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

  async delete(id, name) {
    this.selected = id;
    let price = this.filter_price(name);

    const alert = await this.alertController.create({
      header: "Are u sure you want to Liquidate",
      message: "Choose where you want to liquidate to",
      buttons: [
        {
          text: "Cash",
          handler: async () => {
            const loading = await this.loadingController.create({
              // mode: "ios",
              translucent: true,
              message: "Please wait...",
            });
            loading.present();

            const obj = {
              to: "cash",
              id: this.selected,
              price,
            };

            const api = `sell_stock`;
            this.vue.apiCall(api, "post", obj).then(
              (data) => {
                loading.dismiss();

                if (data.error == 0) {
                  this.stock_div = false;
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
          },
        },
        {
          text: "Loan",
          handler: async () => {
            const loading = await this.loadingController.create({
              // mode: "ios",
              translucent: true,
              message: "Please wait...",
            });
            loading.present();

            const obj = {
              to: "loan",
              id: this.selected,
            };

            const api = `sell_stock`;
            this.vue.apiCall(api, "post", obj).then(
              (data) => {
                loading.dismiss();

                if (data.error == 0) {
                  this.stock_div = false;

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
          },
        },
        {
          text: "Cancel",
          handler: () => {
            //console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  filter_name(id) {
    let company = this.stock_info.companies.filter((data) => {
      return data.InstrumentID == id;
    });

    return company[0].InstrumentDisplayName;
  }

  filter_price(id) {
    let price = this.stock_info.price.filter((data) => {
      return data.InstrumentId == id;
    });
    return price[0]?.OfficialClosingPrice || 1;
  }

  async getSummary() {
    const loading = await this.loadingController.create({
      mode: "ios",
      translucent: true,
      message: "Please wait...",
    });
    loading.present();

    const api = `get_stock`;
    this.vue.apiCall(api).then(
      (data) => {
        if (data.error == 0) {
          this.stocks = data.data;

          const api = `get_stock_info`;
          this.vue.apiCall(api).then(
            (datas) => {
              loading.dismiss();
              if (datas.error == 0) {
                this.stock_info = datas.data;
                this.here = true;
                let companies = this.stock_info.companies;
              } else {
                this.present(datas.message);
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
          loading.dismiss();
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

  async Summary() {
    const api = `get_stock`;
    this.vue.apiCall(api).then(
      (data) => {
        if (data.error == 0) {
          this.stocks = data.data;
          const api = `get_stock_info`;
          this.vue.apiCall(api).then(
            (datas) => {
              if (datas.error == 0) {
                this.stock_info = datas.data;
                this.here = true;
              } else {
                this.present(datas.message);
              }
            },
            (error) => {
              this.present(
                error.error.message ? error.error.message : "Network Issue",
                "Error"
              );
            }
          );
        } else {
          this.present(data.message);
        }
      },
      (error) => {
        this.present(
          error.error.message ? error.error.message : "Network Issue",
          "Error"
        );
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
          handler: () => {
            //console.log('Confirm Okay');
          },
        },
      ],
    });

    await alert.present();
  }

  portChange(event: { component: IonicSelectableComponent; value: any }) {
    console.log("port:", event.value);
  }
}
