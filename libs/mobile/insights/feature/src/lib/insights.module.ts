import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { InsightsPageComponent } from './insights.page';

import { InsightsPageComponentRoutingModule } from './insights-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    InsightsPageComponentRoutingModule,
  ],
  declarations: [InsightsPageComponent],
})
export class InsightsPageComponentModule {}
