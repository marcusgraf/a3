var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require("ionic-angular");
var ionic_native_1 = require("ionic-native");
var core_1 = require("@angular/core");
var angularfire2_1 = require("angularfire2");
var home_1 = require("./pages/home/home");
var workout_list_1 = require("./pages/workout-list/workout-list");
var home_2 = require("./pages/auth/home/home");
var onboarding_1 = require("./pages/auth/onboarding/onboarding");
var MyApp = (function () {
    function MyApp(platform, af) {
        this.platform = platform;
        this.af = af;
        this.initializeApp();
        this.pages = [
            { title: "Home", component: home_1.HomePage },
            { title: "Trainingspläne", component: workout_list_1.WorkoutList }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.af.auth.subscribe(function (data) {
            if (data) {
                _this.authInfo = data;
                _this.nav.setRoot(home_1.HomePage);
            }
            else {
                _this.authInfo = null;
                _this.showOnboardingPage();
            }
        });
    };
    MyApp.prototype.logout = function () {
        if (this.authInfo) {
            this.af.auth.logout();
            return;
        }
    };
    MyApp.prototype.showOnboardingPage = function () {
        this.nav.push(onboarding_1.OnboardingPage);
    };
    MyApp.prototype.showLoginModal = function () {
        this.nav.push(home_2.AuthPage);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav");
    MyApp = __decorate([
        core_1.Component({
            templateUrl: "build/app.html"
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, angularfire2_1.AngularFire])
    ], MyApp);
    return MyApp;
})();
ionic_angular_1.ionicBootstrap(MyApp, [angularfire2_1.FIREBASE_PROVIDERS, angularfire2_1.defaultFirebase({
        apiKey: "AIzaSyCDFxLY9F7sj-1NqlTNf5hpYDNUC1WjC2g",
        authDomain: "athl3tics-a6c0a.firebaseapp.com",
        databaseURL: "https://athl3tics-a6c0a.firebaseio.com",
        storageBucket: "athl3tics-a6c0a.appspot.com",
    })], {
    tabbarPlacement: 'top'
});
