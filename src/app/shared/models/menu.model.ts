import { Meal } from './meal.model';

export interface Menu {
  id: number;
  status: number;
  label: string;
  description?: string;
  priceDF: number;
  availableForWeeks: number[];
  imageId: number;
  meals: Meal[];
}
