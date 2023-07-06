import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordResetPageComponentRoutingModule } from './password-reset-routing.module';

import { PasswordResetPageComponent } from './password-reset.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordResetPageComponentRoutingModule,
  ],
  declarations: [PasswordResetPageComponent],
})
export class PasswordResetPageComponentModule {}
