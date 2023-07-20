import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { Category, Task, TaskService } from '../services/task.service';
import * as TasksActions from './tasks.actions';
import { TasksEffects } from './tasks.effects';

const categoryMock: Category = {
  id: 69,
  name: 'Cleaning',
  icon: 'sparkle',
};

const taskArrayMock: Task[] = [
  {
    title: 'Clean windows',
    description: 'Clean upstairs windows',
    owner: 'John Doe',
    type: categoryMock,
  },
  {
    title: 'Fix radiators',
    description: 'Fix bedroom radiator',
    owner: 'Karen Doe',
    type: categoryMock,
  },
];

const taskServiceMock = {
  getTasks: jest.fn().mockReturnValue(of(taskArrayMock)),
};

describe('TasksEffects', () => {
  let actions: Observable<Action>;
  let effects: TasksEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        TasksEffects,
        provideMockActions(() => actions),
        provideMockStore(),
        {
          provide: TaskService,
          useValue: taskServiceMock,
        },
      ],
    });

    effects = TestBed.inject(TasksEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TasksActions.loadTasks() });

      const expected = hot('-a-|', {
        a: TasksActions.loadTasksSuccess({ tasks: taskArrayMock }),
      });

      expect(effects.loadTasks$).toBeObservable(expected);
    });
  });
});
