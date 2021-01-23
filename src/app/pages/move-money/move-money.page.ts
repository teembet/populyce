import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
@Component({
  selector: "app-move-money",
  templateUrl: "./move-money.page.html",
  styleUrls: ["./move-money.page.scss"],
})
export class MoveMoneyPage implements OnInit {
  constructor(private navCtrl: NavController) {}

  ngOnInit() {}

  user_info() {
    this.navCtrl.navigateForward("user-info");
  }

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }

  recurring() {
    this.navCtrl.navigateForward("recurring-transfer");
  }

  transfer_one() {
    this.navCtrl.navigateForward("transfer-one-time");
  }
}
