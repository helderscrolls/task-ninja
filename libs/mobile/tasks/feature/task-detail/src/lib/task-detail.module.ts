import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { TaskDetailRoutingModule } from './task-detail-routing.module';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  imports: [CommonModule, TaskDetailRoutingModule, FormsModule, IonicModule],
  declarations: [TaskDetailComponent],
})
export class TaskDetailModule {}
