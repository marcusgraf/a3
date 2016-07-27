import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
 Generated class for the WorkoutData provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class RecipeData {
    // array of meals
    private mealList: Array<any>;

    // The array that's going to store the random meals
    private mealsPlan: Array<any> = [];

    data: any;

    constructor(private http: Http) {
        this.data = null;
    }

    getMealList() {
        if (this.data) {
            // already loaded data
            return Promise.resolve(this.data);
        }

        // don't have the data yet
        return new Promise(resolve => {
            // We're using Angular Http provider to request the data,
            // then on the response it'll map the JSON data to a parsed JS object.
            // Next we process the data and resolve the promise with the new data.
            this.http.get('https://athl3tics.de/api-recipes-v1/')
                .map(res => res.json())
                .subscribe(data => {
                    // we've got back the raw data, now generate the core schedule data
                    // and save the data for later reference
                    this.mealList = data;
                });
        });
    }

    // Creates a plan with *mealCount* meals with *calories* calories
    public getMealPlan(mealCount: number, calories: number) {

        // Reset the data
        this.mealsPlan = [];

        for(let i=0; i<mealCount; i++) {
            // Get all the meals with 200 calories
            let selectedMeals = this.getMealsWithCertainCalories(calories);

            // Get a random meal from that list of meals
            let randomMeal = this.getRandomMeal(selectedMeals);

            // Add that meal to the plan
            this.mealsPlan.push(randomMeal);
        }
    }

    // Select all the meals with *calories* calories
    private getMealsWithCertainCalories(calories: number) {
        return this.mealList
            .filter(function(aMeal){
                if(parseInt(aMeal.calories[0]) == calories) {
                    return true;
                } else {
                    return false;
                }
            });
    }

    // Get random index between 0 and the amount of meal sent as parameter
    private getRandomMeal(selectedMeals) {
        let randomIndex = Math.floor((Math.random() * selectedMeals.length) );
        return selectedMeals[randomIndex];
    }
}

