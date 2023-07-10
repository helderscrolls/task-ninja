import { Component } from '@angular/core';

@Component({
  selector: 'task-ninja-password-reset',
  templateUrl: './password-reset.page.html',
  styleUrls: ['./password-reset.page.scss'],
})
export class PasswordResetPageComponent {
  currentYear: number = new Date().getFullYear();
  //Just messing around with Husky
}
