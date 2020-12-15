import { Route, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './shared/guards/auth.guard';

const APP_ROUTE: Route[] = [
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', canActivate:[AuthGuard], component: ProfileComponent },
];

export const AppRounting = RouterModule.forRoot(APP_ROUTE);
