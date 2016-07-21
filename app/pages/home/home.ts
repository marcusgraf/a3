import {NavController, Modal} from "ionic-angular";
import {AngularFire, FirebaseListObservable} from "angularfire2";
import {Observable} from "rxjs/Observable";
import {OnInit, Inject, Component} from "@angular/core";
import {AuthPage} from "../auth/home/home";

@Component({
  templateUrl: "build/pages/home/home.html"
})

export class HomePage {

  constructor(private navCtrl: NavController) {
  }


}
