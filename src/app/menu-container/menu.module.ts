import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuContainerComponent } from './menu-container.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { menuRouting } from './menu.rounting';
import { MenuEditComponent } from './menu-edit/menu-edit.component';

@NgModule({
  declarations: [
    MenuContainerComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuItemDetailsComponent,
    MenuEditComponent,
  ],
  imports: [CommonModule,menuRouting],
  providers: [],
  exports: [],
})
export class MenuModule {}
