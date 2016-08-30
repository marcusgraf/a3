import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ExerciseData } from '../../../providers/exercise-data/exercise-data';

interface Exercise {
    exercise_id: string;
    exercise_name: string;
}

@Component({
    templateUrl: 'build/pages/workout/workout-detail/workout-detail.html',
    providers: [ExerciseData]
})
export class WorkoutDetailPage {
    private allExercises: any;
    private workout: any;
    private workoutExercises: any;

    constructor(private nav: NavController, private navParams: NavParams, public exerciseData: ExerciseData) {
        this.workout = this.navParams.get('workout');
        this.setUpWorkoutData();
    }

    setUpWorkoutData(){
        let that = this;
        this.exerciseData.getExerciseList()
            .then(data => {
                this.allExercises = data;
                this.workoutExercises = this.workout.acf;

                for (let i in this.workoutExercises) {

                    let exercise = this.allExercises.filter((exercise: Exercise) => {
                        return (exercise.exercise_id === this.workoutExercises[i].workout_exercise);
                    });

                    this.workoutExercises[i].exercise = exercise[0];
                }

                console.log(this.workoutExercises);
            });
    }

}
