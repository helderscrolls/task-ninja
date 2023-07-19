import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.initAuth),
      switchMap(() => of(AuthActions.loadAuthSuccess({ auth: [] }))),
      catchError((error) => {
        console.error('Error', error);
        return of(AuthActions.loadAuthFailure({ error }));
      })
    )
  );
}
