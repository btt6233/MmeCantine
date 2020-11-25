import { Route, RouterModule } from '@angular/router';
import { MenuContainerComponent } from './menu-container.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';

const MENU_ROUTES: Route[] = [
  { path: '', component: MenuContainerComponent },
  { path: 'menus', component: MenuContainerComponent },
  { path: 'menu/:id', component: MenuItemDetailsComponent },
];

export const menuRouting = RouterModule.forChild(MENU_ROUTES);
