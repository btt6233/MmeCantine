import { Meal } from './meal.model';
import { Menu } from './menu.model';

export class Quantity {
  constructor(
    public quantity: number,
    public mealId: Meal[],
    public menuId: Menu[]
  ) {}
}
