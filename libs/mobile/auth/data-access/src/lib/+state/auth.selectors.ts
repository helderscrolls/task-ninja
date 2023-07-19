import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AUTH_FEATURE_KEY, AuthState, authAdapter } from './auth.reducer';

// Lookup the 'Auth' feature state managed by NgRx
export const selectAuthState =
  createFeatureSelector<AuthState>(AUTH_FEATURE_KEY);

const { selectAll, selectEntities } = authAdapter.getSelectors();

export const selectAuthLoaded = createSelector(
  selectAuthState,
  (state: AuthState) => state.loaded
);

export const selectAuthError = createSelector(
  selectAuthState,
  (state: AuthState) => state.error
);

export const selectAllAuth = createSelector(
  selectAuthState,
  (state: AuthState) => selectAll(state)
);

export const selectAuthEntities = createSelector(
  selectAuthState,
  (state: AuthState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectAuthState,
  (state: AuthState) => state.selectedId
);

export const selectEntity = createSelector(
  selectAuthEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
