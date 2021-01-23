import { Component, OnDestroy, OnInit } from "@angular/core";
import {
  AlertController,
  LoadingController,
  NavController,
} from "@ionic/angular";
import { PayvueserviceService } from "src/app/services/payvueservice.service";

@Component({
  selector: "app-stock-allocation",
  templateUrl: "./stock-allocation.page.html",
  styleUrls: ["./stock-allocation.page.scss"],
})
export class StockAllocationPage implements OnInit, OnDestroy {
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
    private vue: PayvueserviceService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getSummary();
    this.interval = setInterval(() => {
      this.Summary();
    }, 30000);
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

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
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

  notifications() {
    this.navCtrl.navigateForward("notifications");
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
    return price[0].OfficialClosingPrice;
  }
}
