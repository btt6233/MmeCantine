import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

const API : string = "http://localhost:8080/lunchtime";

interface User {
  id: number;
  name: string;
  firstname: string;
  wallet: number;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any[] = [];
  token: string | null = null;

  constructor( private http: HttpClient, private auth: AuthService) { }

  getUser(id:number) {
    let options = {
      headers: { "Authorization": this.token }
    };
    this.http.get(API + '/user/finda/id', options)
      .subscribe((res: any) => {
        this.user = res;
      })
  }



}
