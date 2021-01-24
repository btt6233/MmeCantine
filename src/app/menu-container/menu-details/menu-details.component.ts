import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Menu } from 'src/app/shared/models/menu.model';
import { MenuService } from 'src/app/shared/services/menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  public menu: Menu | null = null;
  public imgSrc: string = '../assets/images/meal/default.png';
  constructor(
    private menuService: MenuService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.menuService.findMenuById(params.id).subscribe((menu: Menu) => {
        this.menu = menu;
        if ('../assets/images/meal/' + menu.meals[0]) {
          this.imgSrc = '../assets/images/meal/' + menu.meals[0].label + '.png';
        }
      });
    });
  }

}
