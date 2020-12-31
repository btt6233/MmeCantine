import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/Operators';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

const API: string = 'http://localhost:8080/lunchtime';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  public getCurrentUser(): Observable<User> {
    const token = this.authService.jwtToken;
    const decodedToken = helper.decodeToken(token.value.token);

    return this.http.get<User>(API + '/user/find/' + decodedToken.user.id);
  }
}
