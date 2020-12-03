import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

const API : string = "http://localhost:8080/lunchtime";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token : string | null = null;
  users : any[] = [];
  userId: number;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  login() {
    const logs = {
      email: "toto@gmail.com",
      password: "bonjour"
    };
    this.http.post(API + '/login', logs, {observe: "response"})
    .subscribe((res : any) => {
      this.token = res.headers.get("Authorization");
      console.log(this.token);
      
    });
  };

  getUsers() {
    let options = {
      headers : { "Authorization" : this.token } 
    };
    this.http.get(API + '/user/findall', options)
    .subscribe((res : any) => {
      this.users = res;
    });
  };

  userDetail() {
    
    this.http.get(API + '/user/find/',)
  };

}
