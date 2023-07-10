import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TasksPageComponent } from './tasks.page';

import { TasksPageComponentRoutingModule } from './tasks-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TasksPageComponentRoutingModule,
  ],
  declarations: [TasksPageComponent],
})
export class TasksPageComponentModule {}
