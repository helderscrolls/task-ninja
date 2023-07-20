import { createAction, props } from '@ngrx/store';
import { Task } from '../services/task.service';
import { TasksEntity } from './tasks.models';
export const loadTasks = createAction('[Tasks/API] Load Tasks');

export const loadTasksSuccess = createAction(
  '[Tasks/API] Load Tasks Success',
  props<{ tasks: TasksEntity[] }>()
);

export const loadTasksFailure = createAction(
  '[Tasks/API] Load Tasks Failure',
  props<{ error: any }>()
);

export const addTask = createAction(
  '[Tasks/API] Add Task',
  props<{ task: Task }>()
);

export const addTaskSuccess = createAction(
  '[Tasks/API] Add Task Success',
  props<{ task: any }>()
);

export const addTaskFailure = createAction(
  '[Tasks/API] Add Task Failure',
  props<{ error: any }>()
);

export const deleteTask = createAction(
  '[Tasks/API] Delete Task',
  props<{ id: string }>()
);
