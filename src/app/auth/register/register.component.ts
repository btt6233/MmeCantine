import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class SigninComponent implements OnInit {
  public form: FormGroup;
  public error: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      email: [''],
      password: [''],
    });
  }

  public submit(): void {
    this.authService.register(this.form.value).subscribe(
      () => {
        this.userService.getCurrentUser()
        this.router.navigate(['/']);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
