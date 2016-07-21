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
var forgot_password_1 = require("../forgot-password/forgot-password");
var sign_up_1 = require("../sign-up/sign-up");
var home_1 = require("../../home/home");
var LoginEmailPage = (function () {
    function LoginEmailPage(af, navCtrl) {
        this.af = af;
        this.navCtrl = navCtrl;
    }
    LoginEmailPage.prototype.ngOnInit = function () {
    };
    LoginEmailPage.prototype.openForgotPasswordPage = function () {
        this.navCtrl.push(forgot_password_1.ForgotPasswordPage);
    };
    LoginEmailPage.prototype.openSignUpPage = function () {
        this.navCtrl.push(sign_up_1.SignUpPage);
    };
    LoginEmailPage.prototype.login = function (credentials) {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            content: "Please wait..."
        });
        this.navCtrl.present(loading);
        this.af.auth.login(credentials, {
            provider: angularfire2_1.AuthProviders.Password,
            method: angularfire2_1.AuthMethods.Password
        }).then(function (authData) {
            console.log(authData);
            loading.dismiss();
            _this.navCtrl.setRoot(home_1.HomePage);
        }).catch(function (error) {
            loading.dismiss();
            if (error) {
            }
        });
    };
    LoginEmailPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auth/login-email/login-email.html"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, ionic_angular_1.NavController])
    ], LoginEmailPage);
    return LoginEmailPage;
})();
exports.LoginEmailPage = LoginEmailPage;
