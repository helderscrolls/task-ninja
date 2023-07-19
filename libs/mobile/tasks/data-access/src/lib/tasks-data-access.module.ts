import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromTasks from './+state/tasks.reducer';
import { TasksEffects } from './+state/tasks.effects';
import { TasksFacade } from './+state/tasks.facade';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromTasks.TASKS_FEATURE_KEY, fromTasks.tasksReducer),
    EffectsModule.forFeature([TasksEffects]),
  ],
  providers: [TasksFacade],
})
export class TasksDataAccessModule {}
