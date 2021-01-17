import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './guards/auth.guard'
import { UserDetailComponent } from './user-detail/user-detail.component';

const routes: Routes = [
  { path: 'connexion', component: AuthComponent },
  { path: 'user-list', canActivate:[AuthGuard], component: UserComponent },
  { path: 'user/:id', component: UserDetailComponent },
 ];
 
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
