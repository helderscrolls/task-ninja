import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TaskService } from '../services/task.service';
import * as TasksActions from './tasks.actions';

@Injectable()
export class TasksEffects {
  private actions$ = inject(Actions);
  private taskService = inject(TaskService);

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TasksActions.loadTasks),
      switchMap(() =>
        this.taskService
          .getTasks()
          .pipe(map((tasks) => TasksActions.loadTasksSuccess({ tasks: tasks })))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(TasksActions.loadTasksFailure({ error }));
      })
    )
  );

  // addTask$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(TasksActions.addTask),
  //     switchMap((payload) =>
  //       from(this.taskService.addTask(payload.task)).pipe(
  //         map((task) => TasksActions.addTaskSuccess({ task }))
  //       )
  //     )
  //   )
  // );
}
