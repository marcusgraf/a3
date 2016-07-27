import {NavController} from "ionic-angular";
import {Modal, NavParams, ViewController} from 'ionic-angular';
import {OnInit, Inject, Component} from "@angular/core";
import { ProfileData } from '../../../providers/profile-data/profile-data';

import {TabsPage} from "../../tabs/tabs";

@Component({
    templateUrl: "build/pages/auth/onboarding/onboarding.html",
    providers: [ProfileData]
})

export class OnboardingPage {
    public userProfile: any;
    public birthDate: Date = new Date();
    public userWeight: string;
    public userHeight: string;

    public onboardingStep: number;

    constructor(private navCtrl: NavController, public profileData: ProfileData) {
        this.onboardingStep = 1;
        /*this.profileData = profileData;

        this.profileData.getUserProfile().once('value', (snapshot) => {
            this.userProfile = snapshot.val();
            //this.birthDate = this.userProfile.birthDate;
        });*/
    }

    setUserSex(value: string) {
        this.profileData.updateSex(value);
        this.onboardingNextPage();
    }

    setUserFitnessLevel(value: string) {
        this.profileData.updateFitness(value);
        this.onboardingNextPage();
    }

    setUserGoal(value: string) {
        this.profileData.updateGoal(value);
        this.onboardingNextPage();
    }

    setUserMealType(value: string) {
        this.profileData.updateMealType(value);
        this.onboardingNextPage();
    }

    setUserDOB(birthDate){
        this.profileData.updateDOB(birthDate);
    }

    setUserWeight(userWeight){
        this.profileData.updateWeight(userWeight);
    }

    setUserHeight(userHeight){
        this.profileData.updateHeight(userHeight);
    }

    onboardingNextPage() {
        this.onboardingStep++;
    }

    onboardingPrevPage() {
        this.onboardingStep--;
    }

    finishOnboarding() {
        this.setUserWeight(this.userWeight);
        this.setUserHeight(this.userHeight);
        this.navCtrl.setRoot(TabsPage);
    }
}
