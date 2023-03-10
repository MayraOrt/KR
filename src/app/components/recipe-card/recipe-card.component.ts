import { Component, Input } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.sass']
})
export class RecipeCardComponent {
  @Input() recipe!: Recipe;

}
