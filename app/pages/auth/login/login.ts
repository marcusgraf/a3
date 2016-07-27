import {NavController, LoadingController, Platform, Storage, LocalStorage} from "ionic-angular";
import {OnInit, Inject, Component} from "@angular/core";

import {ForgotPasswordPage} from "../forgot-password/forgot-password";
import {SignUpPage} from "../sign-up/sign-up";
import {HomePage} from "../../home/home";
import * as firebase from 'firebase';
import {Facebook} from 'ionic-native';

interface Result {
    access_token?: string;
}

/*
 Generated class for the LoginPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    templateUrl: 'build/pages/auth/login/login.html',
})
export class LoginPage {
    private local: any;
    private loader: any;
    private email: string = "";
    private password: string = "";
    private errorMessage: string = "";

    constructor(private navCtrl: NavController, private platform:Platform, private loadingController: LoadingController) {
        this.local = new Storage(LocalStorage);
        this.loader = this.loadingController.create();
    }

    openForgotPasswordPage():void {
        this.navCtrl.push(ForgotPasswordPage);
    }

    openSignUpPage():void {
        this.navCtrl.push(SignUpPage);
    }

    loginUser() {
        var that: any = this;
        this.loader.present();
        firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (result) {
            that.loader.dismiss();
        }, function (error) {
            that.loader.dismiss();
            console.log(error);
        });
    }

    facebookLogin() {
        Facebook.login(['public_profile', 'user_birthday']).then((result: Result) => {
                var creds = (<any> firebase.auth.FacebookAuthProvider).credential(result.access_token);
                return firebase.auth().signInWithCredential(creds);
            })
            .then((_user) => {
                console.log("_user:", _user);
            })
            .catch((_error) => {
                console.error("Error:", _error);
            });
    }
}
