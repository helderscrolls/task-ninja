import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as TasksActions from './tasks.actions';
import { TasksEffects } from './tasks.effects';

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
      ],
    });

    effects = TestBed.inject(TasksEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: TasksActions.initTasks() });

      const expected = hot('-a-|', {
        a: TasksActions.loadTasksSuccess({ tasks: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
