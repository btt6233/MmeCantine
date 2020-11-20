import { Route, RouterModule } from '@angular/router';
import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuItemDetailsComponent } from './menu-container/menu-item-details/menu-item-details.component';
import { TestComponent } from './test/test.component';

const APP_ROUTE: Route[] = [
  { path: '', component: MenuContainerComponent },
  { path: 'menus', component: MenuContainerComponent },
  { path: 'menu', component: MenuItemDetailsComponent },
  { path: 'menu/:id', component: MenuItemDetailsComponent },
  { path: 'test', component: TestComponent },
];

export const AppRounting = RouterModule.forRoot(APP_ROUTE);
