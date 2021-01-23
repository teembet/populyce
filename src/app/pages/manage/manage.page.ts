import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-manage",
  templateUrl: "./manage.page.html",
  styleUrls: ["./manage.page.scss"],
})
export class ManagePage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  manage_fund() {
    this.navCtrl.navigateForward("funds-portfolio");
  }

  manage_stock() {
    this.navCtrl.navigateForward("stock-profile");
  }
}
