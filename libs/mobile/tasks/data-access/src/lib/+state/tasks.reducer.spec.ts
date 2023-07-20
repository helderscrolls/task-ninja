import { Action } from '@ngrx/store';

import { Category, Task } from '../services/task.service';
import * as TasksActions from './tasks.actions';
import { TasksEntity } from './tasks.models';
import { TasksState, initialTasksState, tasksReducer } from './tasks.reducer';

const categoryMock: Category = {
  id: 69,
  name: 'Cleaning',
  icon: 'sparkle',
};

const taskArrayMock: Task[] = [
  {
    id: '69',
    owner: 'John Doe',
    type: categoryMock,
    title: 'Clean windows',
    description: 'Clean upstairs windows',
  },
  {
    id: 'Super69',
    owner: 'Karen Doe',
    type: categoryMock,
    title: 'Fix radiators',
    description: 'Fix bedroom radiator',
  },
];

describe('Tasks Reducer', () => {
  const createTasksEntity = (taskEntity: Task): TasksEntity => taskEntity;

  describe('valid Tasks actions', () => {
    it('loadTasksSuccess should return the list of known Tasks', () => {
      const tasks = [
        createTasksEntity(taskArrayMock[0]),
        createTasksEntity(taskArrayMock[1]),
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
