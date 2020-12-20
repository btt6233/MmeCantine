
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  token: string | null = "";
  
  constructor(private http: HttpClient, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
    if(this.checkStatus) {
      this.token
    }
    console.log(this.checkStatus());
  }

  login() {
    this.authService.auth();
    // console.log(this.token);
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