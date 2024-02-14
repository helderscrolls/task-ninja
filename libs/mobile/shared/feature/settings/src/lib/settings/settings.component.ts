import { Component, inject } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth';
import { AuthService } from '@task-ninja/mobile/auth/data-access';

@Component({
  selector: 'task-ninja-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly auth = inject(Auth);

  public currentUser: Partial<User> = {
    displayName: this.auth.currentUser?.displayName,
    email: this.auth.currentUser?.email,
  };

  async signOut() {
    await this.authService.signOut();

    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }
}
