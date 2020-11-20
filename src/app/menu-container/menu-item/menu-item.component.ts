import { Component, Input, OnInit } from '@angular/core';
import { Menu } from 'src/app/shared/models/menu.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() menu:Menu;

  constructor() { }

  ngOnInit(): void {
  }

}
