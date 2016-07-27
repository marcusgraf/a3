import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the ExerciseSinglePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/workout/exercise-single/exercise-single.html',
})
export class ExerciseSinglePage {
  exercise: any;

  constructor(private nav: NavController, private navParams: NavParams) {
    this.exercise = this.navParams.get('exercise');
  }

}
