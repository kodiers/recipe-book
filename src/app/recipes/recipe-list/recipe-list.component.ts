import {Component, OnInit} from '@angular/core';
import { Recipe } from '../recipe';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [];

  // recipe = new Recipe('Dummy', 'Dummy', 'http://torso.ru/images/show/famale_mannequin.jpg');

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.recipeService.recipesChanged.subscribe(
        (recipes: Recipe[]) => this.recipes = recipes
    );
  }

}
