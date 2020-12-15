import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap, switchMap } from 'rxjs/Operators';
import { User } from '../models/user.model';

const API: string = 'http://localhost:8080/lunchtime';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);
  constructor(private http: HttpClient) {}

  public getCurrentUser(): Observable<User> {
    if (this.currentUser.value) {
      return this.currentUser;
    } else {
      return this.http.get<User>(API + '/user/find/108').pipe(
        tap((user: User) => {
          this.currentUser.next(user);
        }),
        switchMap(() => {
          return this.currentUser;
        })
      );
    }
  }
}
