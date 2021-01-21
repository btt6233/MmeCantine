import { Ingredient } from './ingredient.model';
import { Image } from "./image.model";

export interface Meal {
  id: string;
  description:string;
  label: string;
  statut: number;
  imageId: number;
  priceDF: number;
  availableForWeeks: number[];
  ingredients: Ingredient[];
}

