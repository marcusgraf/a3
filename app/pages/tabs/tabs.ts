import {Component} from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {WorkoutListPage} from "../../pages/workout/workout-list/workout-list";
import {ExerciseListPage} from "../../pages/workout/exercise-list/exercise-list";
import {ReciepeListPage} from "../../pages/mealplan/reciepe-list/reciepe-list";
import {ProfilePage} from "../../pages/profile/profile";

@Component({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

    private tab1Root: any;
    private tab2Root: any;
    private tab3Root: any;

    constructor() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = HomePage;
        this.tab2Root = ProfilePage;
        this.tab3Root = ReciepeListPage;
    }
}