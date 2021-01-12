import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtToken } from '../models/jwtToken';
import { User } from '../models/user';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Credentials } from '../models/user';


const API : string = "http://localhost:8080/lunchtime";
const HELPER = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  credentials: Credentials = {
    email: "",
    password: ""
  };
  public currentUser: User = null;
  token: string | null = "";
  isLunchLady: boolean;
  

  constructor(
    private http: HttpClient,
  ) {

  
  }

  auth() {
    this.http.post(API + '/login', this.credentials, {observe: "response"})
    .subscribe((res : any) => {
      this.token = res.headers.get("Authorization");
      const decodedToken = HELPER.decodeToken(this.token);
      this.currentUser = decodedToken.user ;
      this.isLunchLady = this.currentUser.isLunchLady;
      // console.log(this.isLunchLady);
      
      // console.log(HELPER.decodeToken(this.token).user.firstname);
      localStorage.setItem("Authorization", this.token);
      // sessionStorage.setItem["Authorization"] = this.token;
    });

  };

  signout(): void {
    localStorage.removeItem("Authorization");
    this.token = null;
  };






}
