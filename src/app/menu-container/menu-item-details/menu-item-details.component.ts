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
  menu: Menu;
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuService
        .getMenu(params.id)
        .subscribe((menu: Menu) => this.menu = menu);
    });
  }
}
