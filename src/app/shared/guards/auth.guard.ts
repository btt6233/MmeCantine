import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { JwtTokent } from '../models/jwt-token.model';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/Operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.jwtToken.pipe(
      map((jwtToken: JwtTokent) => {
        return jwtToken.isAuthenticated;
      })
    );
  }
}
