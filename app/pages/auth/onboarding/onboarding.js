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
var core_1 = require("@angular/core");
var UserService_1 = require('../../../services/UserService');
var home_1 = require("../home/home");
var OnboardingPage = (function () {
    function OnboardingPage(navCtrl, userService) {
        this.navCtrl = navCtrl;
        this.userService = userService;
        this.onboardingStep = 1;
    }
    OnboardingPage.prototype.setUserSex = function (value) {
        this.userService.setUserSex(value);
        this.onboardingNextPage();
    };
    OnboardingPage.prototype.setUserTarget = function (value) {
        this.userService.setUserTarget(value);
        this.navCtrl.push(home_1.AuthPage);
        //this.onboardingNextPage();
    };
    OnboardingPage.prototype.onboardingNextPage = function () {
        this.onboardingStep++;
    };
    OnboardingPage.prototype.onboardingPrevPage = function () {
        this.onboardingStep--;
    };
    OnboardingPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auth/onboarding/onboarding.html",
            providers: [UserService_1.UserService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, UserService_1.UserService])
    ], OnboardingPage);
    return OnboardingPage;
})();
exports.OnboardingPage = OnboardingPage;
