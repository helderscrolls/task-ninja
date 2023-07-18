import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { ToastService } from '@task-ninja/mobile/shared/data-access';

@Component({
  selector: 'task-ninja-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPageComponent {
  passwordResetForm: FormGroup = this.formBuilder.group({
    email: [null, [Validators.required, Validators.email]],
  });

  currentYear: number = new Date().getFullYear();
  submitAttempt = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) {}

  // Maybe rename this function into formControls
  // to make it more readable in the future
  get f(): { [key: string]: AbstractControl } {
    return this.passwordResetForm.controls;
  }

  async sendPasswordResetRequest() {
    this.submitAttempt = true;

    if (this.passwordResetForm.valid) {
      const emailSent = await this.authService.resetPassword(
        this.passwordResetForm.value.email
      );

      if (emailSent !== null) {
        this.router.navigateByUrl('/signin', { replaceUrl: true });

        this.toastService.presentToast(
          'Password reset sent to: ',
          this.passwordResetForm.value.email,
          'top',
          'success',
          2000
        );
      } else {
        this.toastService.presentToast(
          'Error',
          'Password reset failed',
          'top',
          'danger',
          4000
        );
      }
    }
  }
}
