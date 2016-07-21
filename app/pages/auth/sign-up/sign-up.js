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
var home_1 = require("../../home/home");
var SignUpPage = (function () {
    function SignUpPage(af, navCtrl) {
        this.af = af;
        this.navCtrl = navCtrl;
    }
    SignUpPage.prototype.ngOnInit = function () {
    };
    SignUpPage.prototype.openLoginPage = function () {
        this.navCtrl.push(login_email_1.LoginEmailPage);
    };
    SignUpPage.prototype.registerUser = function (credentials) {
        var _this = this;
        var loading = ionic_angular_1.Loading.create({
            content: "Please wait..."
        });
        this.navCtrl.present(loading);
        this.af.auth.createUser(credentials).then(function (authData) {
            console.log(authData);
            credentials.created = true;
            return _this.login(credentials, loading);
        }).catch(function (error) {
            loading.dismiss();
            if (error) {
            }
        });
    };
    SignUpPage.prototype.login = function (credentials, loading) {
        var _this = this;
        this.af.auth.login(credentials, {
            provider: angularfire2_1.AuthProviders.Password,
            method: angularfire2_1.AuthMethods.Password
        }).then(function (authData) {
            console.log(authData);
            loading.dismiss();
            _this.navCtrl.setRoot(home_1.HomePage);
        }).catch(function (error) {
            loading.dismiss();
            _this.error = error;
            console.log(error);
        });
    };
    SignUpPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auth/sign-up/sign-up.html"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, ionic_angular_1.NavController])
    ], SignUpPage);
    return SignUpPage;
})();
exports.SignUpPage = SignUpPage;
