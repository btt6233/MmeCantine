import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user.model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

const API: string = 'http://localhost:8080/lunchtime';
const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient, private authService: AuthService) {}

  public getCurrentUser(): Observable<User> {
    const token = this.authService.jwtToken;
    const decodedToken = helper.decodeToken(token.value.token);

    this.http
      .get<User>(API + '/user/find/' + decodedToken.user.id)
      .subscribe((user: User) => {
        this.user.next(user);
      });
    return this.user;
  }

  public logout() {
    this.user = null;
    this.getCurrentUser();
  }
}
