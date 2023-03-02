import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm= new FormGroup({
    firstName : new FormControl('', [Validators.required]),
    lastName : new FormControl('', [Validators.required]),
  })

  constructor (
    private router: Router
  ) {}

  goToRegister() {
    this.router.navigate(["auth/register"])
  }

  forgotPassword() {
    this.router.navigate(["auth/forgot-pwd"])
  }
}

