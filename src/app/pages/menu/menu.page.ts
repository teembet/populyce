import { Component, OnInit } from "@angular/core";
import { Router, RouterEvent } from "@angular/router";
import { MenuController, NavController } from "@ionic/angular";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: "Fund",
      url: "",
    },
    {
      title: "Activity",
      url: "",
    },
    {
      title: "External Bank",
      url: "",
    },
  ];

  selectedPath: string = "";

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private menuCtrl: MenuController
  ) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}

  fund() {
    this.navCtrl.navigateForward("/menu/first/tabs/funds");
    this.menuCtrl.close();
  }

  activities() {
    this.navCtrl.navigateForward("/activities");
  }

  external_bank() {
    this.navCtrl.navigateForward("/external-bank");
  }
}
