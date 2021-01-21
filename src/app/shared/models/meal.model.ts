import { Ingredient } from './ingredient.model';
import { Image } from "./image.model";

// export interface Meal {
//   id: string;
//   description:string;
//   label: string;
//   statut: number;
//   imageId: number;
//   priceDF: number;
//   availableForWeeks: number[];
//   ingredients: Ingredient[];
// }

export class Meal {
  constructor(
    public description:string,
    public label: string,
    public priceDF: number,
    public ingredients: Ingredient[],
    public availableForWeeks?: number[],
    // public image?: Image[],
  ) {}
}

