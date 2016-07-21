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
var ForgotPasswordPage = (function () {
    function ForgotPasswordPage(af, navCtrl) {
        this.af = af;
        this.navCtrl = navCtrl;
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.resetPassword = function (credentials) {
        var loading = ionic_angular_1.Loading.create({
            content: "Please wait.."
        });
        this.navCtrl.present(loading);
        var ref = this;
        // this.ref.resetPassword({
        //   email: credentials.email
        // }, function(error) {
        //   if (error) {
        //     switch (error.code) {
        //       case "INVALID_USER":
        //         ref.error = "Este usuário não existe.";
        //         break;
        //       default:
        //         ref.error = error;
        //         break;
        //     }
        //     loading.dismiss();
        //   } else {
        //     ref.error = "Em breve você irá receber um e-mail com uma nova senha temporária.";
        //     loading.dismiss();
        //   }
        // });
    };
    ForgotPasswordPage = __decorate([
        core_1.Component({
            templateUrl: "build/pages/auth/forgot-password/forgot-password.html"
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire, ionic_angular_1.NavController])
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
})();
exports.ForgotPasswordPage = ForgotPasswordPage;
