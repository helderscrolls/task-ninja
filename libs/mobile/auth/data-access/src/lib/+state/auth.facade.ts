import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import * as AuthFeature from './auth.reducer';
import * as AuthSelectors from './auth.selectors';

@Injectable()
export class AuthFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(AuthSelectors.selectAuthLoaded));
  allAuth$ = this.store.pipe(select(AuthSelectors.selectAllAuth));
  selectedAuth$ = this.store.pipe(select(AuthSelectors.selectEntity));

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(AuthActions.initAuth());
  }
}
