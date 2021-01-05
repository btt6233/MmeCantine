import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Meal } from 'src/app/shared/models/meal.model';
import { Menu } from 'src/app/shared/models/menu.model';
import { MealService } from 'src/app/shared/services/meal.service';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
  styleUrls: ['./menu-edit.component.css'],
})
export class MenuEditComponent implements OnInit {
  menu: Menu;
  meals: Meal[] | null = null;
  menuForm: FormGroup;

  constructor(private mealService: MealService, private fb: FormBuilder, private menuService : MenuService) {}

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

  selectedPlats($event) {
    this.menuForm.get('plats').patchValue($event.target.value);
  }

  createMenu() {
    if (!this.menuForm.invalid) {
      this.menuService.addMenu(this.menuForm.value).subscribe(
        (menu: Menu) => {
          console.log(menu);
          
        },
        (err) => {
          console.log(err);
          
        }
      );
    } else {
      console.log('invalid');
    }
  }
}
