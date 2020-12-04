import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meal } from 'src/app/shared/models/meal.model';
import { Menu } from 'src/app/shared/models/menu.model';
import { MealService } from 'src/app/shared/services/meal.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  menu: Menu;
  meals: Meal[] | null = null;
  menuForm: FormGroup;

  constructor(private mealService: MealService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.mealService.findAll().subscribe((meals: Meal[]) => {
      this.meals = meals;
    });
    this.initForm();
  }

  initForm(menu = { nom: '', prix: '', dispo: '', plats: '', desc: '' }) {
    this.menuForm = this.fb.group({
      nom: [menu.nom, Validators.required],
      prix: [menu.prix, Validators.required],
      dispo: [menu.dispo, Validators.required],
      plats: [menu.plats, Validators.required],
      desc: [menu.desc],
    });
  }

  createMenu(){

    console.log(this.menuForm.value);
    

  }
}
