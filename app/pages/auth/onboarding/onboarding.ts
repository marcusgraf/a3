import {NavController} from "ionic-angular";
import {Modal, NavParams, ViewController} from 'ionic-angular';
import {AngularFire, AuthProviders, AuthMethods } from "angularfire2";
import {OnInit, Inject, Component} from "@angular/core";
import {UserService} from '../../../services/UserService';
import {AuthPage} from "../home/home";

@Component({
    templateUrl: "build/pages/auth/onboarding/onboarding.html",
    providers: [UserService]
})

export class OnboardingPage {
    form;

    public myScroll: any;
    public onboardingStep: number = 1;
    public isoDate = '';
    public heightNumbers = Array(100).fill().map((x,i)=>i);


    constructor(private navCtrl: NavController, private userService: UserService) {
    }

    ionViewLoaded() {

    }

    setUserSex(value: string) {
        this.userService.setUserSex(value);
        this.onboardingNextPage();
    }

    setUserFitnessLevel(value: number) {
        this.userService.setUserFitnessLevel(value);
        this.onboardingNextPage();
    }

    setUserGoal(value: string) {
        this.userService.setUserGoal(value);
        this.onboardingNextPage();
    }

    onboardingNextPage() {
        this.onboardingStep++;
        this.initPages();
    }

    onboardingPrevPage() {
        this.onboardingStep--;
        this.initPages();
    }

    onSubmit() {
        console.log(this.form);
    }

    initPages() {
        if(this.onboardingStep == 4) {
            /*var that = this;
            setTimeout(function () {
                that.myScroll = new IScroll('.iscroll', { snap: 'li', scrollX: true, scrollY: true });
                that.myScroll.on('scrollEnd', function () {
                    console.log(that.myScroll.currentPage.pageX);
                    return true;
                });


            }, 0);*/
        }
    }

}
