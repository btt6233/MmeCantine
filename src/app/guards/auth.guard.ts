import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../shared/models/user';
import { AuthService } from '../shared/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

const HELPER = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  public currentUser: User;

  constructor(private authService: AuthService,) {
    this.currentUser = this.authService.currentUser;
    this.isConnected();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.currentUser){
      return this.currentUser.isLunchLady;
      } else {
        return false;
      }
  }

  isConnected() {
    if(localStorage.getItem("Authorization")){
      let decodeToken = HELPER.decodeToken(localStorage.getItem("Authorization"));
      this.currentUser = decodeToken.user;
      return this.currentUser;
    } else {
      return false;
    }
  }
}