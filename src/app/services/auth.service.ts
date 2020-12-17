import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/user';


const API : string = "http://localhost:8080/lunchtime";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials: Credentials = {
    email: "",
    password: ""
  };
  token: string | null = "";

  constructor(
    private http: HttpClient,
  ) { }

  auth() {
    this.http.post(API + '/login', this.credentials, {observe: "response"})
    .subscribe((res : any) => {
      this.token = res.headers.get("Authorization");
      // console.log(this.token);
      localStorage.setItem("Authorization", this.token);
      // sessionStorage.setItem["Authorization"] = this.token;
    });

  };

  signout(): void {
    localStorage.removeItem("Authorization");
    this.token = null;
  };



}
