import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  show: boolean;

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  comeup() {
    this.show = true
  }

  login() {
    this.navCtrl.navigateForward("login")
  }

  signup() {
    this.navCtrl.navigateForward("sign-up")
  }

}
