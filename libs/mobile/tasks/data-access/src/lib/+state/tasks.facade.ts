import { Injectable, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Task } from '../services/task.service';
import * as TasksActions from './tasks.actions';
import * as TasksSelectors from './tasks.selectors';

@Injectable()
export class TasksFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(TasksSelectors.selectTasksLoaded));
  allTasks$ = this.store.pipe(select(TasksSelectors.selectAllTasks));
  selectedTasks$ = this.store.pipe(select(TasksSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(TasksActions.loadTasks());
  }

  addTask(task: Task) {
    this.store.dispatch(TasksActions.addTask({ task }));
  }
}
