import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { JwtTokent } from '../shared/models/jwt-token.model';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public jwtToken: JwtTokent;
  public subscription: Subscription;
  isCantiniere: boolean = true;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.subscription = this.authService.jwtToken.subscribe(
      (jwtToken: JwtTokent) => {
        this.jwtToken = jwtToken;
      }
    );
  }

  public logout():void {
    this.authService.logout();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
