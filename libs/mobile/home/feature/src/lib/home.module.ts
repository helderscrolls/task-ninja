import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HomePageComponent } from './home.page';

import { HomePageComponentRoutingModule } from './home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageComponentRoutingModule,
  ],
  declarations: [HomePageComponent],
})
export class HomePageComponentModule {}
