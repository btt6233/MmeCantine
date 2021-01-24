import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/user.model';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  public form: FormGroup;
  public error: string;
  public formStringified: string;
  public id: number = 150;
  public today = new Date();
  public dd = String(this.today.getDate()).padStart(2, '0');
  public mm = String(this.today.getMonth() + 1).padStart(2, '0');
  public yyyy = this.today.getFullYear();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.id++],
      address: ['', Validators.required],
      wallet: [0.0],
      postalCode: ['', Validators.required],
      registrationDate: [this.mm + '/' + this.dd + '/' + this.yyyy],
      email: ['', Validators.required, Validators.email],
      isLunchLady: [false],
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(4)],
      phone: ['', Validators.required, Validators.minLength(10), Validators.maxLength(10)],
      town: ['', Validators.required],
      sex: [0],
      status: [0],
      image: [null]
    });
  }

  submit(): void {
    this.formStringified = JSON.stringify(this.form.value, null, 4);
    this.authService.signup(this.formStringified).subscribe(
      () => {
        this.router.navigate(['/signin']);
      },
      (err) => {
        this.error = err;
      }
    );
    console.log(this.formStringified);
  }
}
