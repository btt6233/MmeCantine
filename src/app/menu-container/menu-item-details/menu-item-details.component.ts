import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu.model';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu-item-details',
  templateUrl: './menu-item-details.component.html',
  styleUrls: ['./menu-item-details.component.css'],
})
export class MenuItemDetailsComponent implements OnInit {
  public menu: Menu | null = null;
  public imgSrc: string = '../assets/images/meal/default.png';
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuService.findById(params.id).subscribe((menu: Menu) => {
        this.menu = menu;
        if ('../assets/images/meal/' + menu.meals[0].imageId) {
          this.imgSrc = '../assets/images/meal/' + menu.meals[0].label + '.png';
        }
      });
    });
  }
}
