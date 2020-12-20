import { Component, OnInit } from '@angular/core';
// import { HttpClient} from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private authService: AuthService ) { }

  ngOnInit(): void {
    this.isConnected();
  }

  isConnected() {
    if(localStorage.getItem("Authorization")){
      return true;
      console.log(true);
    } else {
      console.log(false);
      return false;
    }
  }

  logout(): void {
    this.authService.signout();
  };

}
