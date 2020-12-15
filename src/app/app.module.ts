import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuModule } from './menu-container/menu.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRounting } from './app-routing';

import { AuthService } from './shared/services/auth.service';
import { UserService } from './shared/services/user.service';

import { AuthGuard } from './shared/guards/auth.guard';

import { AuthInterceptor } from './shared/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
    SignupComponent,
    SigninComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRounting,
    MenuModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    AuthService,
    AuthGuard,
    UserService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
