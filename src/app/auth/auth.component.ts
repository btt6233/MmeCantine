
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user'

const HELPER = new JwtHelperService();

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token: string | null = "";
  public currentUser: User | null;
  public isLunchLady: boolean;
  
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    if(this.checkStatus) {
      this.token;
      
    }   
  }

  login() {
    this.authService.auth();
    localStorage.setItem("Authorization", this.token);

  }

  // logout(): void {
  //   this.authService.signout();
  // };

  checkStatus() {
    if (localStorage.getItem("Authorization")){
      return true;
    } else {
      return false;
    }
  }

  }



