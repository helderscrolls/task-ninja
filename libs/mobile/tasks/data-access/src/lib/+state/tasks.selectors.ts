import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TASKS_FEATURE_KEY, TasksState, tasksAdapter } from './tasks.reducer';

// Lookup the 'Tasks' feature state managed by NgRx
export const selectTasksState =
  createFeatureSelector<TasksState>(TASKS_FEATURE_KEY);

const { selectAll, selectEntities } = tasksAdapter.getSelectors();

export const selectTasksLoaded = createSelector(
  selectTasksState,
  (state: TasksState) => state.loaded
);

export const selectTasksError = createSelector(
  selectTasksState,
  (state: TasksState) => state.error
);

export const selectAllTasks = createSelector(
  selectTasksState,
  (state: TasksState) => selectAll(state)
);

export const selectTasksEntities = createSelector(
  selectTasksState,
  (state: TasksState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectTasksState,
  (state: TasksState) => state.selectedId
);

export const selectEntity = createSelector(
  selectTasksEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
