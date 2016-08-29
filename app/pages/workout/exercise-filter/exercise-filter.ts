import { Component } from '@angular/core';

import { NavParams, ViewController } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/workout/exercise-filter/exercise-filter.html'
})
export class ExerciseFilterPage {
  tracks: Array<{name: string, isChecked: boolean}> = [];

  constructor(
      public confData: any,
      public navParams: NavParams,
      public viewCtrl: ViewController
  ) {
    // passed in array of track names that should be excluded (unchecked)
    let excludedTrackNames = this.navParams.data;

    this.confData.getTracks().then((trackNames: string[]) => {

      trackNames.forEach(trackName => {
        this.tracks.push({
          name: trackName,
          isChecked: (excludedTrackNames.indexOf(trackName) === -1)
        });
      });

    });
  }

  resetFilters() {
    // reset all of the toggles to be checked
    this.tracks.forEach(track => {
      track.isChecked = true;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    let excludedTrackNames = this.tracks.filter(c => !c.isChecked).map(c => c.name);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data) {
    // using the injected ViewController this page
    // can "dismiss" itself and pass back data
    this.viewCtrl.dismiss(data);
  }
}