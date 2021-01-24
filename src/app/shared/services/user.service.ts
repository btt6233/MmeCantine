import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { User } from '../models/user';

const API: string = "http://localhost:8080/lunchtime";
const HELPER = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {
  }

  /**
   * retourn le user recuperé par le token
   */
  public getCurrentUser() {
    if (localStorage.getItem('Authorization')) {
      let token = localStorage.getItem('Authorization');
      const decodedToken = HELPER.decodeToken(token);

      let user = decodedToken.user

      return user
    }
  }

  /**
   * Return le user recuperer via une requete vers l'Api
   */
  public getCurrentUserFromBack(userId):Observable<User>{
    return this.http.get<User>(API + '/user/find/' + userId)
  }


  // getCurrentUser(): void {
  //   const TOKEN = this.auth.token;
  //   const DECODE_TOKEN = HELPER.decodeToken(this.token);

  //   this.http
  //   .get(API + '/user/find/' + DECODE_TOKEN.user.id)
  //   .subscribe((user: User) => {
  //     this.user.next(user);
  //   });
  // return this.user;
  // }



}
