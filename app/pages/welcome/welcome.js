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
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
//import { AuthPage } from "./pages/auth/home/home";
var onboarding_1 = require("../auth/onboarding/onboarding");
/*
  Generated class for the WelcomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var WelcomePage = (function () {
    function WelcomePage(nav) {
        this.nav = nav;
    }
    WelcomePage.prototype.openRegisterPage = function () {
        this.nav.push(onboarding_1.OnboardingPage);
    };
    WelcomePage.prototype.openLoginPage = function () {
        //this.nav.push(AuthPage);
    };
    WelcomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/welcome/welcome.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], WelcomePage);
    return WelcomePage;
})();
exports.WelcomePage = WelcomePage;
