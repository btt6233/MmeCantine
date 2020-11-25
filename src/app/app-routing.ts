import { Route, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';

const APP_ROUTE: Route[] = [{ path: 'test', component: TestComponent }];

export const AppRounting = RouterModule.forRoot(APP_ROUTE);
