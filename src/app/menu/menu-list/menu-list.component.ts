import { Component, OnInit } from '@angular/core';
import { MenusService } from '../menus.service';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
})
export class MenuListComponent implements OnInit {
  private _menus: Menu[];

  menus: Menu[];
  menu: Menu | null = null;

  constructor(private menusService: MenusService) {}

  ngOnInit(): void {
    this.loadMenuAvailableToday();
  }

  loadMenuAvailableToday() {
    this.menusService.getMenuAvailableToday().subscribe((menus: Menu[]) => {
      this.menus = menus;
      this._menus = menus;
    });
  }
}
