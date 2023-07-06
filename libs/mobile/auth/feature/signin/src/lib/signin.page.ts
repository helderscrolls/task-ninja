import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { ToastService } from '@task-ninja/mobile/shared/data-access';

@Component({
  selector: 'task-ninja-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPageComponent {
  currentYear: number = new Date().getFullYear();
  submitAttempt = false;

  signInForm: FormGroup = this.formBuilder.group({
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: [
      '',
      Validators.compose([Validators.minLength(6), Validators.required]),
    ],
  });

  constructor(
    private authService: AuthService,
    private loadingController: LoadingController,
    private formBuilder: FormBuilder,
    private toastService: ToastService,
    private router: Router
  ) {}

  // Sign in
  async signIn() {
    this.submitAttempt = true;

    // If email or password empty
    if (
      this.signInForm.value.email == '' ||
      this.signInForm.value.password == ''
    ) {
      this.toastService.presentToast(
        'Error',
        'Please input email and password',
        'top',
        'danger',
        2000
      );
    } else {
      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Signing in...</p><span>Please be patient.</span>',
        spinner: 'crescent',
      });
      await loading.present();

      // TODO: Add your sign in logic
      // ...

      // Fake timeout
      setTimeout(async () => {
        // Sign in success
        await this.router.navigate(['/home']);
        loading.dismiss();
      }, 2000);
    }
  }
}
