import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Meal } from 'src/app/shared/models/meal.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css'],
})
export class MenuItemDetailsComponent implements OnInit {
  meal: Meal;
  constructor(
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.getMeal();
  }

  getMeal() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuService.getMealById(params.id).subscribe((meal: Meal) => {
        this.meal = meal;
      });
    });
  }
}
