import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtTokent } from '../models/jwt-token.model';
import { User } from '../models/user.model';
import { tap } from 'rxjs/Operators';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public jwtToken: BehaviorSubject<JwtTokent> = new BehaviorSubject({
    isAuthenticated: null,
    token: null,
  });
  constructor(private http: HttpClient) {
    this.initToken();
  }

  private initToken(): void {
    const token = localStorage.getItem('jwt');
    if (token) {
      this.jwtToken.next({
        isAuthenticated: true,
        token: token,
      });
    } else {
      this.jwtToken.next({
        isAuthenticated: false,
        token: null,
      });
    }
  }

  public signup(user: string): Observable<User> {
    return this.http.put<User>(API + '/user/register', user);
  }

  public signin(credentials: {
    email: string;
    password: string;
  }): Observable<string> {
    return this.http
      .post<string>(API + '/login', credentials, { observe: 'response' })
      .pipe(
        tap((res: any) => {
          this.jwtToken.next({
            isAuthenticated: true,
            token: res.headers.get('Authorization'),
          });
          localStorage.setItem('jwt', res.headers.get('Authorization'));
        })
      );
  }

  public logout(): void {
    this.jwtToken.next({
      isAuthenticated: false,
      token: null,
    });
    localStorage.removeItem('jwt');
  }
}
