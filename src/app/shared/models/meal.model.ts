import { Ingredient } from './ingredient.model';

export interface Meal {
  id: string;
  label: string;
  statut: number;
  imageId: number;
  priceDF: number;
  availableForWeeks: number[];
  ingredients: Ingredient[];
}
