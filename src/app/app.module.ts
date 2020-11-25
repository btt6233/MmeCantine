import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TestComponent } from './test/test.component';

import { AppRounting } from './app-routing';
import { MenuModule } from './menu-container/menu.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRounting, MenuModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
