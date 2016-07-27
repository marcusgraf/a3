import { Injectable } from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

@Injectable()
export class ProfileData {
  public userProfile: any;
  public currentUser: any;

  constructor(public nav:NavController) {
    this.currentUser = firebase.auth().currentUser;
    this.userProfile = firebase.database().ref('/userProfile');
  }

  getUserProfile(): any {
    return this.userProfile.child(this.currentUser.uid);
  }

  updateName(firstName: string, lastName: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      firstName: firstName,
      lastName: lastName,
    });
  }

  updateSex(userSex: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      sex: userSex
    });
  }

  updateFitness(userFitness: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      fitness: userFitness
    });
  }

  updateGoal(userGoal: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      goal: userGoal
    });
  }

  updateMealType(userMealType: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      mealType: userMealType
    });
  }

  updateDOB(birthDate: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      birthDate: birthDate,
    });
  }

  updateWeight(weight: string): any {
    var currentDate = new Date();
    return this.userProfile.child(this.currentUser.uid).child("weight").push({
      'date': currentDate.toDateString(), 'weight': weight
    });
  }

  updateHeight(height: string): any {
    return this.userProfile.child(this.currentUser.uid).update({
      height: height,
    });
  }

  updateEmail(newEmail: string): any {
    this.currentUser.updateEmail(newEmail).then(() => {
      this.userProfile.child(this.currentUser.uid).update({
        email: newEmail
      });
    }, (error) => {
      console.log(error);
    });
  }

  updatePassword(newPassword: string): any {
    this.currentUser.updatePassword(newPassword).then(() => {
      console.log("Password Changed");
    }, (error) => {
      console.log(error);
    });
  }
}