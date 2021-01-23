import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import {
  AlertController,
  LoadingController,
  MenuController,
  NavController,
} from "@ionic/angular";
import { AuthServiceService } from "src/app/services/auth-service.service";
import * as Highcharts from "highcharts";
import { PayvueserviceService } from "src/app/services/payvueservice.service";

@Component({
  selector: "app-fund-allocation",
  templateUrl: "./fund-allocation.page.html",
  styleUrls: ["./fund-allocation.page.scss"],
})
export class FundAllocationPage implements OnInit {
  highcharts = Highcharts;
  chartOptions = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: 200,
      width: 100,
    },
    title: {
      text: "",
    },
    labels: {
      enabled: false,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
      },
    },
    series: [
      {
        name: "Brands",
        colorByPoint: true,
        data: [
          {
            name: "Chrome",
            y: 61.41,
            sliced: true,
            selected: true,
          },
          {
            name: "Internet Explorer",
            y: 11.84,
          },
          {
            name: "Firefox",
            y: 10.85,
          },
          {
            name: "Edge",
            y: 4.67,
          },
          {
            name: "Safari",
            y: 4.18,
          },
          {
            name: "Other",
            y: 7.05,
          },
        ],
      },
    ],
  };
  amounts: any;
  inflation = 1.8;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private menu: MenuController,
    private vue: PayvueserviceService,
    private authService: AuthServiceService,
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

  notifications() {
    this.navCtrl.navigateForward("notifications");
  }
}
