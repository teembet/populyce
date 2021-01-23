import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-cash-allocation",
  templateUrl: "./cash-allocation.page.html",
  styleUrls: ["./cash-allocation.page.scss"],
})
export class CashAllocationPage implements OnInit {
  amounts: { [k: string]: any };

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.amounts = this.router.getCurrentNavigation().extras.state.amounts;
      }
    });
  }

  ngOnInit() {}
}
