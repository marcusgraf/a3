import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RecipeData } from '../../../providers/reciepe-data/recipe-data';

/*
  Generated class for the ReciepeListPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/mealplan/reciepe-list/reciepe-list.html',
  providers: [RecipeData]
})
export class ReciepeListPage {

  public recipes: any;

  constructor(private nav: NavController, public recipeData: RecipeData) {
    this.loadMeals();
  }

  loadMeals(){
    this.recipeData.getMealList()
        .then(data => {
          this.recipes = data;
        });
  }
}
