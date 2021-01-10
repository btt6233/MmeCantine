import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../models/user';

const HELPER = new JwtHelperService();


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public currentUser: User | null;
  public isLunchLady: boolean;

  constructor( private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void {
    this.isConnected();
    
    console.log(this.isLunchLady);
    
  }

  isConnected() {
    if(localStorage.getItem("Authorization")){
      this.currentUser = HELPER.decodeToken(localStorage.getItem("Authorization"));
      // this.isLunchLady = this.authService.currentUser.isLunchLady == true
      return this.currentUser;

    } else {
      this.currentUser = null;
      return false;
    }
  }

  logout(): void {
    this.authService.signout();
  };

  
}
