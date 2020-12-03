import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [AdminComponent, AuthComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    AdminComponent,
    AuthComponent,
  ]
})
export class AdminModule { }
