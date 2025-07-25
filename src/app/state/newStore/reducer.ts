import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSuccess, loadUserFailure, updateUser, deleteUser  } from './actions';
import { AppState, initialState } from './state';

export const appReducer = createReducer(
  initialState,
  on(loadUser, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(loadUserSuccess, (state, { user }) => ({
    ...state,
    isLoading: false,
    user,
    error: null,
  })),
  on(loadUserFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error,
  }))
  // ,
  // on(updateUser, (state, { user }) => ({
  //   ...state,
  //   users: state.users.map(u => u.id === user.id ? { ...u, ...user } : u)  // Update the user in the array
  // })),
  // on(deleteUser, (state, { userId }) => ({
  //   ...state,
  //   user: state.user ? state.user.filter(u => u.id !== userId) : [],
  // }))
);