import { Route, RouterModule } from '@angular/router';
import { LunchLadyGuard } from '../shared/guards/lunch-lady.guard';
import { MenuContainerComponent } from './menu-container.component';
import { MenuEditComponent } from './menu-edit/menu-edit.component';
import { MenuItemDetailsComponent } from './menu-item-details/menu-item-details.component';

const MENU_ROUTES: Route[] = [
  { path: '', component: MenuContainerComponent },
  { path: 'menus', component: MenuContainerComponent },
  {
    path: 'menu/edit',
    canActivate: [LunchLadyGuard],
    component: MenuEditComponent,
  },
  { path: 'menu/:id', component: MenuItemDetailsComponent },
];

export const menuRouting = RouterModule.forChild(MENU_ROUTES);
