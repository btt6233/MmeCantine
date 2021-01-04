import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class LunchLadyGuard implements CanActivate {
  public currentUser: null | User;
  public isLunchLady: boolean;

  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.currentUser = user;
    });

    if (this.currentUser) {
      this.isLunchLady = this.currentUser.isLunchLady;
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLunchLady;
  }
}
