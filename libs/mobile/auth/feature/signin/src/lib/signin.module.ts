import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageComponentRoutingModule } from './signin-routing.module';

import { SigninPageComponent } from './signin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SigninPageComponentRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SigninPageComponent],
})
export class SigninPageComponentModule {}
