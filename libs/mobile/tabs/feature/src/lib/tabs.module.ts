import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { TabsPageComponentRoutingModule } from './tabs-routing.module';

import { TabsPageComponent } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageComponentRoutingModule,
  ],
  declarations: [TabsPageComponent],
})
export class TabsPageComponentModule {}
