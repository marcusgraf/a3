import {NavController, Loading, Platform, Storage, LocalStorage} from "ionic-angular";
import {OnInit, Inject, Component} from "@angular/core";

import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {LoginPage} from "../login/login";
import {HomePage} from "../../home/home";
import * as firebase from 'firebase';
import {Facebook} from 'ionic-native';

interface errorLayout {
  code: string;
}

@Component({
  templateUrl: "build/pages/auth/sign-up/sign-up.html"
})

export class SignUpPage {
  private local: any;

  public email: string = "";
  public password: string = "";
  public errorMessage: string = "";

  constructor(private navCtrl: NavController, private platform:Platform) {
    this.local = new Storage(LocalStorage);

    this.email = "";
    this.password = "";
    this.errorMessage = "";
  }

  ngOnInit() {

  }

  openLoginPage() {
    this.navCtrl.setRoot(LoginPage);
  }

  registerUser() {
    console.log(this.email);
    console.log(this.password);

    firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (result) {
      console.log(result);
    }, function (error: errorLayout) {
      if(error.code == "auth/weak-password") {
        this.errorMessage = "passwort zu schwach";
      }
    });
  }

  facebookLogin() {
    Facebook.login(['public_profile', 'user_birthday']).then(() => {
      this.local.set('logged', true);
      this.navCtrl.setRoot(HomePage);
    }, (...args) => {
      console.log(args);
    })
  }
}
