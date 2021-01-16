import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { JwtHelperService } from '@auth0/angular-jwt';

const HELPER = new JwtHelperService();

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public currentUser: User;

  constructor() {}

  ngOnInit(): void {
    this.getUser();
  }

  public getUser() {
    let token = localStorage.getItem('Authorization');
    const decodedToken = HELPER.decodeToken(token);

    this.currentUser = decodedToken.user
  }
}
