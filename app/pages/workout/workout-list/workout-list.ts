import {Component} from '@angular/core';
import {NavController, Alert} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/workout-list/workout-list.html'
})
export class WorkoutListPage {

    notes: any = [];

    constructor(private nav: NavController) {

    }
}