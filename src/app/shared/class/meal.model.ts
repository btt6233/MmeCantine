import { Image } from "../models/image.model";
import { Ingredient } from "../models/ingredient.model";

export class Meal {
    constructor(
      public description:string,
      public label: string,
      public image: Image[],
      public priceDF: number,
      public availableForWeeks: number[],
      public ingredients: Ingredient[],
    ) {}
  }