import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SettingsRoutingModule],
  declarations: [SettingsComponent],
})
export class SettingsModule {}
