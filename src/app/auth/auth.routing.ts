import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { VerifiedComponent } from './verified/verified.component';
import { CheckEmailComponent } from './check-email/check-email.component';

const routes: Routes = [
    { path: '', component: AuthComponent, children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgot-pwd', component: ForgotPasswordComponent },
      { path: 'reset-pwd', component: ResetPasswordComponent },
      { path: 'verified', component: VerifiedComponent },
      // { path: 'check-mail', component: CheckEmailComponent },
      { path: '**', redirectTo: 'register'  },
    ]},
    { path: '**', redirectTo: 'register'  },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {}
