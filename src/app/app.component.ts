import { Component, OnInit } from '@angular/core';
import { INGREDIENTS } from './data/ingredients.data';
import { RECIPES } from './data/recipes.data';
import { Ingredient } from './model/ingredient.model';
import { Recipe } from './model/recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'KR';
  public recipes:Recipe[] = RECIPES;
  public ingredients:Ingredient[] = INGREDIENTS;

  ngOnInit(): void {
      
  }
}
