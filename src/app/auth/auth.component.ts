
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

const HELPER = new JwtHelperService();

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token: string | null = "";
  
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    // console.log('salut');
    
    // setTimeout(function(){console.log(this.token)}, 2000);
    
    if(this.checkStatus) {
      this.token
      console.log();
      
    }
    // console.log(this.checkStatus());
  }

  login() {
    this.authService.auth();
    // console.log(this.authService.currentUser);
    // console.log(HELPER.decodeToken(this.token));

    // setTimeout(function(){console.log(HELPER.decodeToken(this.token))}, 2000)
    
    // console.log(this.user.firstname);
  };

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