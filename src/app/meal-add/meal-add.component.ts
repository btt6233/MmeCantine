import { Component, OnInit } from '@angular/core';
import { MealService } from '../shared/services/meal.service';
import { Meal } from "../shared/models/meal.model";
import { Ingredient } from '../shared/models/ingredient.model';


@Component({
  selector: 'app-meal-add',
  templateUrl: './meal-add.component.html',
  styleUrls: ['./meal-add.component.css']
})
export class MealAddComponent implements OnInit {

  public dish: Meal;

  constructor( private mealService: MealService ) { }

  ngOnInit(): void {
    this.createMeal();
  }

  createMeal(){
    let meal = new Meal("une description",
      "un label",
      // this.dish.image,
      13,
      [new Ingredient("tomates", "descrrrrriiririptino", null)])
    this.mealService.addMeal(meal).subscribe((res: any) => {
      console.log(res);
      
    });
  }

}
