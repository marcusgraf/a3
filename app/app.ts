import {Nav, Platform, Modal, ionicBootstrap} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {Component, ViewChild} from "@angular/core";
import {AngularFire, FirebaseListObservable, FIREBASE_PROVIDERS, defaultFirebase} from "angularfire2";
import {HomePage} from "./pages/home/home";
import {WorkoutList} from "./pages/workout-list/workout-list";
import {AuthPage} from "./pages/auth/home/home";
import {OnboardingPage} from "./pages/auth/onboarding/onboarding";

@Component({
  templateUrl: "build/app.html"
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  authInfo: any;
  pages: Array<{title: string, component: any}>;

  constructor(private platform: Platform, private af: AngularFire) {
    this.initializeApp();

    this.pages = [
      { title: "Home", component: HomePage },
      { title: "Trainingspläne", component: WorkoutList }
    ];


  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  ngOnInit() {
    this.af.auth.subscribe(data => {
      if (data) {
        this.authInfo = data;
        this.nav.setRoot(HomePage);
      } else {
        this.authInfo = null;
        this.showOnboardingPage();
      }
    });
  }

  logout() {
    if (this.authInfo) {
      this.af.auth.logout();
      return;
    }
  }

  showOnboardingPage() {
      this.nav.push(OnboardingPage);
  }

  showLoginModal() {
    this.nav.push(AuthPage);
  }
}

ionicBootstrap(MyApp, [FIREBASE_PROVIDERS, defaultFirebase({
    apiKey: "AIzaSyCDFxLY9F7sj-1NqlTNf5hpYDNUC1WjC2g",
    authDomain: "athl3tics-a6c0a.firebaseapp.com",
    databaseURL: "https://athl3tics-a6c0a.firebaseio.com",
    storageBucket: "athl3tics-a6c0a.appspot.com",
  })], {
  tabbarPlacement: 'top'
});
