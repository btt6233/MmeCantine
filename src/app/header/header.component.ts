import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JwtTokent } from '../shared/models/jwt-token.model';
import { User } from '../shared/models/user.model';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public jwtToken: JwtTokent;
  public subscription: Subscription;
  public currentUser: User;
  public isLunchLady: boolean;
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.subscription = this.authService.jwtToken.subscribe(
      (jwtToken: JwtTokent) => {
        this.jwtToken = jwtToken;
      }
    );

    this.userService.getCurrentUser().subscribe((user: User) => {
      this.currentUser = user;
      this.isLunchLady = user.isLunchLady
    });
  }

  public logout(): void {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
