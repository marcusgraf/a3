import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';
import { WorkoutData } from '../../../providers/workout-data/workout-data';

import {WorkoutDetailPage} from '../workout-detail/workout-detail'

@Component({
    templateUrl: 'build/pages/workout/workout-list/workout-list.html',
    providers: [WorkoutData]
})
export class WorkoutListPage {
    private allWorkouts: any;
    private filteredWorkouts: any;

    constructor(private nav: NavController, public workoutData: WorkoutData) {
        this.loadWorkouts();
    }

    loadWorkouts(){
        this.workoutData.getWorkoutList()
            .then(data => {
                this.allWorkouts = data;
            });
    }

    viewWorkout(event, workout) {
        this.nav.push(WorkoutDetailPage, {
            workout: workout
        });
    }
}