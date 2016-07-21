import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { AuthPage } from "./pages/auth/home/home";
import { OnboardingPage } from "../auth/onboarding/onboarding";

/*
  Generated class for the WelcomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/welcome/welcome.html',
})
export class WelcomePage {
  constructor(private nav: NavController) {}

  openRegisterPage() {
    this.nav.push(OnboardingPage);
  }

  openLoginPage() {
    //this.nav.push(AuthPage);
  }
}
