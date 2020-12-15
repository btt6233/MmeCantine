import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user.model';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public currentUser: Observable<User>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getCurrentUser();
  }
}
