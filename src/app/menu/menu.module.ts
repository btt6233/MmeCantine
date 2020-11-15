import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuMainComponent } from './menu-main/menu-main.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';



@NgModule({
  declarations: [MenuMainComponent, MenuListComponent, MenuItemComponent, MenuItemDetailsComponent],
  imports: [
    CommonModule
  ],
  exports:[MenuMainComponent]
})
export class MenuModule { }
