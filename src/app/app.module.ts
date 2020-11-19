import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { MenuContainerComponent } from './menu-container/menu-container.component';
import { MenuListComponent } from './menu-container/menu-list/menu-list.component';
import { MenuItemComponent } from './menu-container/menu-item/menu-item.component';
import { MenuItemDetailsComponent } from './menu-container/menu-item-details/menu-item-details.component';
import { TestComponent } from './test/test.component';

import { AppRounting } from './app-routing';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuContainerComponent,
    MenuListComponent,
    MenuItemComponent,
    MenuItemDetailsComponent,
    TestComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRounting],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
