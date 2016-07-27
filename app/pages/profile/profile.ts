import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProfileData } from '../../providers/profile-data/profile-data';

@Component({
  templateUrl: 'build/pages/profile/profile.html',
  providers: [ProfileData]
})

export class ProfilePage {
  public userProfile: any;
  public birthDate: string;

  constructor(private nav: NavController, public profileData: ProfileData) {
    this.profileData = profileData;

    this.profileData.getUserProfile().once('value', (snapshot) => {
      this.userProfile = snapshot.val();
      this.birthDate = this.userProfile.birthDate;
    });
  }

  updateDOB(birthDate){
    this.profileData.updateDOB(birthDate);
  }
}
