var UserService = (function () {
    function UserService(af) {
        this.af = af;
        this.userData.userEmail;
    }
    UserService.prototype.setUserName = function (userName) {
        this.userName = userName;
    };
    UserService.prototype.setUserEmail = function (userEmail) {
    };
    UserService.prototype.setUserSex = function (userSex) {
        this.userSex = userSex;
    };
    UserService.prototype.setUserTarget = function (userTarget) {
        this.userTarget = userTarget;
    };
    UserService.prototype.getUserName = function () {
        return this.userName;
    };
    UserService.prototype.getUserSex = function () {
        return this.userSex;
    };
    UserService.prototype.getUserTarget = function () {
        return this.userTarget;
    };
    UserService.prototype.updateUserData = function (authData) {
        var itemObservable = this.af.database.object('/users/' + authData.uid);
        itemObservable.set({
            "provider": authData.auth.providerData[0].providerId,
            "avatar": authData.auth.photoURL || "MISSING",
            "displayName": authData.auth.providerData[0].displayName || authData.auth.email,
        });
    };
    return UserService;
})();
exports.UserService = UserService;
