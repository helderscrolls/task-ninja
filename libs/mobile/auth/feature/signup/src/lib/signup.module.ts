import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupPageComponentRoutingModule } from './signup-routing.module';

import { SignupPageComponent } from './signup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupPageComponentRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupPageComponent],
})
export class SignupPageComponentModule {}
