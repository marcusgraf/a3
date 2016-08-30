import {App, Nav, Platform, Modal, ionicBootstrap} from "ionic-angular";
import {StatusBar} from "ionic-native";
import {Component, ViewChild} from "@angular/core";
import * as firebase from 'firebase';

// Provider
import { ExerciseData } from './providers/exercise-data/exercise-data';

// Auth
import {LoginPage} from "./pages/auth/login/login";
import {OnboardingPage} from "./pages/auth/onboarding/onboarding";

// Main
import {TabsPage} from "./pages/tabs/tabs";
import {WorkoutListPage} from "./pages/workout/workout-list/workout-list";
import {ExerciseListPage} from "./pages/workout/exercise-list/exercise-list";
import {ProfilePage} from "./pages/profile/profile";

@Component({
  templateUrl: "build/app.html",
})

class MyApp {
  @ViewChild(Nav) nav: Nav;

  public currentUser: any;
  public userProfile: any;

  pages: Array<{title: string, component: any}>;

  constructor(private app: App, private platform: Platform) {
    var config = {
      apiKey: "AIzaSyCDFxLY9F7sj-1NqlTNf5hpYDNUC1WjC2g",
      authDomain: "athl3tics-a6c0a.firebaseapp.com",
      databaseURL: "https://athl3tics-a6c0a.firebaseio.com",
      storageBucket: "athl3tics-a6c0a.appspot.com",
    };

    firebase.initializeApp(config);

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // If there's a user take him to the home page.
        //this.nav.setRoot(TabsPage);
        this.currentUser = user;
        this.userProfile = firebase.database().ref('/userProfile');
        var that = this;
        var ref = this.userProfile.child(firebase.auth().currentUser.uid);

        ref.once("value", function(snapshot) {
          if(!snapshot.exists() ||
              !snapshot.child("birthDate").exists() ||
              !snapshot.child("fitness").exists() ||
              !snapshot.child("goal").exists() ||
              !snapshot.child("height").exists() ||
              !snapshot.child("mealType").exists() ||
              !snapshot.child("sex").exists() ||
              !snapshot.child("weight").exists()) {
            //that.nav.setRoot(OnboardingPage);
          }
          else {
            //that.nav.setRoot(TabsPage);
          }
        });
      } else {
        // If there's no user logged in send him to the LoginPage
        //this.nav.setRoot(LoginPage);
      }
    });

    this.pages = [
      { title: "Startseite", component: TabsPage },
      { title: "Workouts", component: WorkoutListPage },
      { title: "Übungen", component: ExerciseListPage },
      { title: "Onboarding", component: OnboardingPage },
      { title: "Login", component: LoginPage },
      { title: "Profil", component: ProfilePage }
    ];

    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.nav.setRoot(WorkoutListPage);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn"t want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  ngOnInit() {

  }

  logout() {
    firebase.auth().signOut();
  }
}

ionicBootstrap(MyApp,[], {
  mode: 'ios', // use 'md' for android and 'wp' for windows
  tabbarPlacement: 'top',
  iconMode: 'md',
  modalEnter: 'modal-slide-in',
  modalLeave: 'modal-slide-out',
  pageTransition: 'ios',
  backButtonText: '',
});
