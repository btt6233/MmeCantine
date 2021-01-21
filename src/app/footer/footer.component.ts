import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { User } from '../shared/models/user';


const HELPER = new JwtHelperService();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public currentUser: User | null;
  public isLunchLady: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isConnected();
    console.log(this.currentUser);
    
  }

  isConnected() {
    if(localStorage.getItem("Authorization")){
      let decodeToken = HELPER.decodeToken(localStorage.getItem("Authorization"));
      this.currentUser = decodeToken.user;
      return this.currentUser;
      
    } else {
      return false;
    }
  }

}
