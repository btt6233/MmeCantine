import { Component, OnInit } from '@angular/core';
import { Menu } from '../shared/models/menu.model';
import { MenuService } from '../shared/services/menu.service';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.css']
})
export class MenuContainerComponent implements OnInit {

  public menus: Menu[];

  constructor(private MenuService: MenuService) { }

  ngOnInit(): void {
    this.MenuService.findAllAvailableForToday().subscribe((menus: Menu[]) => {
      this.menus = menus;
    });
  }

}
