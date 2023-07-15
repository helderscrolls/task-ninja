import { Component } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from '@task-ninja/mobile/auth/data-access';

@Component({
  selector: 'task-ninja-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    public auth: Auth
  ) {}

  async signOut() {
    await this.authService.signOut();

    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }
}
