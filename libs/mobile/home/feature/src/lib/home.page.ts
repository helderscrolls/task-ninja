import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@task-ninja/mobile/auth/data-access';

@Component({
  selector: 'task-ninja-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePageComponent implements OnInit {
  contentLoaded = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Fake timeout
    setTimeout(() => {
      this.contentLoaded = true;
    }, 2000);
  }

  async signOut() {
    await this.authService.signOut();

    this.router.navigateByUrl('/signin', { replaceUrl: true });
  }
}
