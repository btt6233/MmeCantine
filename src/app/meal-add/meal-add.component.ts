import { Component, OnInit } from '@angular/core';
import { MealService } from '../shared/services/meal.service';
import { Meal } from "../shared/models/meal.model";
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.css']
})
export class MealAddComponent implements OnInit {
  public dish: Meal;

  constructor( private mealService: MealService ) { }

  ngOnInit(): void {
  }

  createMeal(){
    let meal = new Meal(this.dish.description,
      this.dish.label,
      this.dish.image,
      this.dish.priceDF,
      this.dish.availableForWeeks,
      this.dish.ingredients);
    this.mealService.addMeal(meal).subscribe((meal: Meal) => {
      this.dish = meal;
      
    });
  }

}
