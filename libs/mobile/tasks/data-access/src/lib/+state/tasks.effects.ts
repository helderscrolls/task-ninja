import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as TasksActions from './tasks.actions';
import * as TasksFeature from './tasks.reducer';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.initTasks),
      switchMap(() => of(TasksActions.loadTasksSuccess({ tasks: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(TasksActions.loadTasksFailure({ error }));
      })
    )
  );
}
