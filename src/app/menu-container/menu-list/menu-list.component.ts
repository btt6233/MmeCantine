import { Component, OnInit } from '@angular/core';
import { Menu } from '../../shared/models/menu.model';
import { MenuService } from '../../shared/services/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  public menus: Menu[];

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.menuService.getMenusAvailableToday().subscribe((menu: Menu[]) => {
      this.menus = menu;
    });
  }
}
