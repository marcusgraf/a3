import {NavController, Loading} from "ionic-angular";
import {OnInit, Inject, Component} from "@angular/core";
import {LoginPage} from "../login/login";

@Component({
  templateUrl: "build/pages/auth/forgot-password/forgot-password.html"
})

export class ForgotPasswordPage {
  error: any;

  constructor(private navCtrl: NavController) {
  }

  ngOnInit() {

  }

  resetPassword(credentials) {

  }
}
