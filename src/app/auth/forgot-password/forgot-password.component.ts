import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  constructor (private router: Router) {}

  backToLogin() {
    this.router.navigate(["auth/login"])
  }
}
