import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/shared/models/meal.model';
import { MealService } from 'src/app/shared/services/meal.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  meals: Meal[] | null = null;

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.mealService.findAll().subscribe((meals: Meal[]) => {
      this.meals = meals;
    });
  }
}
