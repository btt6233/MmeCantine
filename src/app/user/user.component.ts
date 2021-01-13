import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { AuthService } from '../services/auth.service'

const API : string = "http://localhost:8080/lunchtime";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  token: string | null = null;
  users: any[] = [];

  constructor(private http: HttpClient, private auth: AuthService) { }

  ngOnInit(): void {
    // console.log(this.auth.token);
    
  }

  // getUserList(){
  //   let options = {
  //     headers: { "Authorization": this.token }
  //   };
  // }

}


