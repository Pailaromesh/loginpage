import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './state';

export const selectAppState = createFeatureSelector<AppState>('appState');

export const selectUser = createSelector(
  selectAppState,
  (state: AppState) => state.user
);

export const selectLoading = createSelector(
  selectAppState,
  (state: AppState) => state.isLoading
);

export const selectError = createSelector(
  selectAppState,
  (state: AppState) => state.error
);