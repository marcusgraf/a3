import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ExerciseData } from '../../../providers/exercise-data/exercise-data';

import { ExerciseSinglePage } from '../exercise-single/exercise-single';
import { ExerciseFilterPage } from '../exercise-filter/exercise-filter';

interface Exercise {
  exercise_name: string;
}

@Component({
  templateUrl: 'build/pages/workout/exercise-list/exercise-list.html',
  providers: [ExerciseData]
})
export class ExerciseListPage {
  private searchQuery: string = '';
  private allExercises: any;
  private filteredExercises: any;
  private excludeMuscles: any = [];

  constructor(private nav: NavController, public exerciseData: ExerciseData, public modalCtrl: ModalController) {
    this.loadExercises();
  }

  loadExercises(){
    this.exerciseData.getExerciseList()
      .then(data => {
        this.allExercises = data;
        this.initializeItems();
      });
  }

  initializeItems() {
    this.filteredExercises = this.allExercises;
  }

  getExerciseByName(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filteredExercises = this.allExercises.filter((exercise: Exercise) => {
        return (exercise.exercise_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  viewExercise(event, exercise) {
    this.nav.push(ExerciseSinglePage, {
      exercise: exercise
    });
  }

  presentFilter() {
    let modal = this.modalCtrl.create(ExerciseFilterPage, this.excludeMuscles);
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        this.excludeMuscles = data;
      }
    });
  }

}
