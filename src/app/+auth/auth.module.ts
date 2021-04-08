import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPasswordEmailSentPage } from './pages/forgot-password-email-sent/forgot-password-email-sent.page';
import { ForgotPasswordPage } from './pages/forgot-password/forgot-password.page';
import { PasswordResetFailedPage } from './pages/password-reset-failed/password-reset-failed.page';
import { PasswordResetSucceededPage } from './pages/password-reset-succeeded/password-reset-succeeded.page';
import { PasswordResetPage } from './pages/password-reset/password-reset.page';
import { SignInPage } from './pages/sign-in/sign-in.page';
import { SignUpPage } from './pages/sign-up/sign-up.page';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
@NgModule({
  declarations: [
    SignInPage,
    SignUpPage,
    ForgotPasswordPage,
    ForgotPasswordEmailSentPage,
    PasswordResetPage,
    PasswordResetSucceededPage,
    PasswordResetFailedPage,
  ],
  imports: [
    CommonModule, AuthRoutingModule, MatFormFieldModule, MatInputModule,MatIconModule, FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot(
      {
        position: ["top","right"],
        timeOut: 3000,
        showProgressBar: false,
        pauseOnHover: true,
        clickToClose: true,
      }
    ),
  ],
})
export class AuthModule {}
