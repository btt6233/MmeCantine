import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nom: [''],
      prenom: [''],
      email: [''],
      tel: [''],
      password: [''],
      adresse: [''],
      codePostal: [''],
      ville: [''],
    });
  }

  submit(): void {
    this.authService.signup(this.form.value).subscribe(
      (user: User) => {
        this.router.navigate(['/signin']);
      },
      (err) => {
        this.error = err;
      }
    );
  }
}
