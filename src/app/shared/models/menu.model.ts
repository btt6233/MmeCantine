import { Meal } from './meal.model';

export interface Menu {
  id: number;
  label: string;
  status: number;
  imageId: number;
  priceDF: number;
  availableForWeeks: number[];
  meals: Meal[];
}
