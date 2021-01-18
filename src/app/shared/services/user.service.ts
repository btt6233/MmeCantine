import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { AuthService } from './auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

const API : string = "http://localhost:8080/lunchtime";
const HELPER = new JwtHelperService();

interface User {
  id: number;
  name: string;
  firstname: string;
}


@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string | null = null;

  constructor(private http: HttpClient,handler: HttpBackend, private auth: AuthService) {
    this.http = new HttpClient(handler);
   }

  findById(id: number): any {

    return this.http.get(API + '/user/find/' + id);
  }
}
