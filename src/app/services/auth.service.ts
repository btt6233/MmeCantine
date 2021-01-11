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
    // this.initToken()
  
  }

  // private initToken(): void {
  //   const token = localStorage.getItem('jwt');
  //   if (token) {
  //     this.jwtToken.next({
  //       isAuthenticated: true,
  //       token: token,
  //     });
  //     const decodedToken = HELPER.decodeToken(this.token);
  //     console.log(decodedToken);
      
  //     this.currentUser = decodedToken.user ;
  //   } else {
  //     this.jwtToken.next({
  //       isAuthenticated: false,
  //       token: null,
  //     });
  //     this.currentUser = null ;
  //   }
  // }

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

  checkRoles(){
    if(this.currentUser.isLunchLady){
      return true;
    } else {
      return false;
    }
  }

  // public signin(credentials: {
  //   email: string;
  //   password: string;
  // }): Observable<string> {
  //   return this.http
  //     .post<string>(API + '/login', credentials, { observe: 'response' })
  //     .pipe(
  //       tap((res: any) => {
  //         this.jwtToken.next({
  //           isAuthenticated: true,
  //           token: res.headers.get('Authorization'),
  //         });
  //         localStorage.setItem('jwt', res.headers.get('Authorization'));
  //       })
  //     );
  // }

  signout(): void {
    localStorage.removeItem("Authorization");
    this.token = null;
  };






}
