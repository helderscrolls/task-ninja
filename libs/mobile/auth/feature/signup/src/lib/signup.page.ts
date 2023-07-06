import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '@task-ninja/mobile/auth/data-access';
import { ToastService } from '@task-ninja/mobile/shared/data-access';

@Component({
  selector: 'task-ninja-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPageComponent {
  currentYear: number = new Date().getFullYear();
  submitAttempt = false;

  signupForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.compose([Validators.required])],
    email: ['', Validators.compose([Validators.email, Validators.required])],
    password: [
      '',
      Validators.compose([Validators.minLength(6), Validators.required]),
    ],
    password_repeat: [
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

  // Sign up
  async signUp() {
    this.submitAttempt = true;

    // If email or password empty
    if (
      this.signupForm.value.email === '' ||
      this.signupForm.value.password === '' ||
      this.signupForm.value.password_repeat === ''
    ) {
      this.toastService.presentToast(
        'Error',
        'Please fill in all fields',
        'top',
        'danger',
        4000
      );

      // If passwords do not match
    } else if (
      this.signupForm.value.password != this.signupForm.value.password_repeat
    ) {
      this.toastService.presentToast(
        'Error',
        'Passwords must match',
        'top',
        'danger',
        4000
      );
    } else {
      // Proceed with loading overlay
      const loading = await this.loadingController.create({
        cssClass: 'default-loading',
        message: '<p>Signing up...</p><span>Please be patient.</span>',
        spinner: 'crescent',
      });
      await loading.present();

      // TODO: Add your sign up logic
      // ...

      // Success messages + routing
      this.toastService.presentToast(
        'Welcome!',
        'Lorem ipsum',
        'top',
        'success',
        2000
      );
      await this.router.navigate(['/home']);
      loading.dismiss();
    }
  }
}
