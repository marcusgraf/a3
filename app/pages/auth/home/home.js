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
var angularfire2_1 = require("angularfire2");
var core_1 = require("@angular/core");
var login_email_1 = require("../login-email/login-email");
var sign_up_1 = require("../sign-up/sign-up");
var terms_of_service_1 = require("../../terms-of-service/terms-of-service");
var AuthPage = (function () {
    function AuthPage(af, navCtrl) {
        this.af = af;
        this.navCtrl = navCtrl;
    }
    AuthPage.prototype.ngOnInit = function () {
    };
    AuthPage.prototype.openSignUpPage = function () {
        this.navCtrl.push(sign_up_1.SignUpPage);
    };
    AuthPage.prototype.openLoginPage = function () {
        this.navCtrl.push(login_email_1.LoginEmailPage);
    };
    AuthPage.prototype.openTermsOfService = function () {
        this.navCtrl.push(terms_of_service_1.TermsOfServicePage);
    };
    AuthPage.prototype.registerUserWithFacebook = function () {
        var _this = this;
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Facebook,
            method: angularfire2_1.AuthMethods.Popup
        }).then(function (authData) {
            _this.navCtrl.popToRoot();
        }).catch(function (error) {
            _this.error = error;
        });
    };
    AuthPage.prototype.registerUserWithGoogle = function () {
        var _this = this;
        this.af.auth.login({
            provider: angularfire2_1.AuthProviders.Google,
            method: angularfire2_1.AuthMethods.Popup
        }).then(function (value) {
            _this.navCtrl.popToRoot();
        }).catch(function (error) {
            _this.error = error;
        });
    };
    AuthPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auth/home/home.html"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, ionic_angular_1.NavController])
    ], AuthPage);
    return AuthPage;
})();
exports.AuthPage = AuthPage;
