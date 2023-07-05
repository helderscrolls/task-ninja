import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { InsightsPage } from './insights.page';

import { InsightsPageRoutingModule } from './insights-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InsightsPageRoutingModule,
  ],
  declarations: [InsightsPage],
})
export class InsightsPageModule {}
