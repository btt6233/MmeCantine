import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './shared/services/auth.service';
import { UserComponent } from './user/user.component';
import { MenuModule } from './menu-container/menu.module';
import { UserDetailComponent } from './user-detail/user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    UserComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenuModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }