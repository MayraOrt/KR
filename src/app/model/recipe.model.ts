import { Ingredient } from "./ingredient.model";

export interface Recipe {
  name: string,
  image: string,
  ingredients: Ingredient[],
  preparation: string,
}
