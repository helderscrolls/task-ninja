import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import * as TasksFeature from './tasks.reducer';
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
    this.store.dispatch(TasksActions.initTasks());
  }
}
