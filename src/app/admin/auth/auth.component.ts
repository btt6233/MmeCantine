import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

interface Logs {
  email: string;
  password: string;
}
const API : string = "http://localhost:8080/lunchtime";
const ISADMIN : string = "Authorization";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  logs: Logs = {
    email: "",
    password: ""
  };
  token: string | null = "";
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    if(this.checkStatus) {
      this.token
    }
    console.log(this.checkStatus());
    
  }

  login() {

    this.http.post(API + '/login', this.logs, {observe: "response"})
    .subscribe((res : any) => {
      this.token = res.headers.get("Authorization");
      console.log(this.token);
      localStorage.setItem("Authorization", this.token);
      // sessionStorage.setItem["Authorization"] = this.token;
    });
    // console.log(this.logs);
    
    
  };

  logout(): void {
    localStorage.clear();
    this.token = null;
  };

  checkStatus() {
    if (localStorage.getItem("Authorization")){
      return true;
    } else {
      return false;
    }
  }


}
