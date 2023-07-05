import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { MyTasksPage } from './my-tasks.page';

import { MyTasksPageRoutingModule } from './my-tasks-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MyTasksPageRoutingModule,
  ],
  declarations: [MyTasksPage],
})
export class MyTasksPageModule {}
