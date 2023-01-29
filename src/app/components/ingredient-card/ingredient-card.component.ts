import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredient.model';

@Component({
  selector: 'app-ingredient-card',
  templateUrl: './ingredient-card.component.html',
  styleUrls: ['./ingredient-card.component.sass']
})
export class IngredientCardComponent {
  @Input() ingredient!: Ingredient;

}
