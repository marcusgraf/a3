import {Modal, NavController, Page, ViewController} from 'ionic-angular';
import { Injectable } from '@angular/core';
import {Component, OnInit, Inject} from '@angular/core';
import {AngularFire, AuthProviders, AuthMethods } from 'angularfire2';

@Injectable()
export class UserService {

    userId: string;
    userName: string;
    userEmail: string;
    userSex: string;
    userFitnessLevel: number;
    userNutrition: string;
    userGoal: string;
    userHeight: number;
    userWeight: number;
    userBirthday: string;

    constructor(private af: AngularFire) {}

    // set

    setUserId(userId) {
        this.userId = userId;
    }

    setUserName(userName) {
        this.userName = userName;
    }

    setUserEmail(userEmail) {
        this.userEmail = userEmail;
    }

    setUserSex(userSex) {
        this.userSex = userSex;
    }

    setUserFitnessLevel(userFitnessLevel) {
        this.userFitnessLevel;
    }

    setUserGoal(userGoal) {
        this.userGoal = userGoal;
    }

    setUserHeight(userHeight) {
        this.userHeight = userHeight;
    }

    setUserWeight(userWeight) {
        this.userWeight = userWeight;
    }

    setUserBirthday(userBirthday) {
        this.userBirthday = userBirthday;
    }

    // get

    getUserId() {
        return this.userId;
    }

    getUserName() {
        return this.userName;
    }

    getUserEmail() {
        return this.userEmail;
    }

    getUserSex() {
        return this.userSex;
    }

    getUserFitnessLevel() {
        return this.userFitnessLevel;
    }

    getUserGoal() {
        return this.userGoal;
    }

    getUserHeight() {
        return this.userHeight;
    }

    getUserWeight() {
        return this.userWeight;
    }

    getUserBirthday() {
        return this.userBirthday;
    }

    // functions

    /*updateUserData(authData) {
        const itemObservable = this.af.database.object('/users/' + authData.uid);
        itemObservable.set({
            "provider": authData.auth.providerData[0].providerId,
            "avatar": authData.auth.photoURL || "MISSING",
            "displayName": authData.auth.providerData[0].displayName || authData.auth.email,
        })
    }*/
}