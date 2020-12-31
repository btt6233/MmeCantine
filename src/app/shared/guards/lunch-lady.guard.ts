import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root',
})
export class LunchLadyGuard implements CanActivate {
  public isLunchLady: boolean;

  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe((user: User) => {
      this.isLunchLady = user.isLunchLady;
    });
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.isLunchLady;
  }
}
