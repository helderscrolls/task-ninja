import { Action } from '@ngrx/store';

import * as TasksActions from './tasks.actions';
import { TasksEntity } from './tasks.models';
import { TasksState, initialTasksState, tasksReducer } from './tasks.reducer';

describe('Tasks Reducer', () => {
  const createTasksEntity = (id: string, name = ''): TasksEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Tasks actions', () => {
    it('loadTasksSuccess should return the list of known Tasks', () => {
      const tasks = [
        createTasksEntity('PRODUCT-AAA'),
        createTasksEntity('PRODUCT-zzz'),
      ];
      const action = TasksActions.loadTasksSuccess({ tasks });

      const result: TasksState = tasksReducer(initialTasksState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = tasksReducer(initialTasksState, action);

      expect(result).toBe(initialTasksState);
    });
  });
});
