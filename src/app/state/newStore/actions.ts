import { createAction, props } from '@ngrx/store';
import { User } from './state';

export const loadUser = createAction('[App] Load User');
export const loadUserSuccess = createAction('[App] Load User Success', props<{ user: User }>());
export const loadUserFailure = createAction('[App] Load User Failure', props<{ error: string }>());

export const updateUser = createAction('[User] Update User', props<{ user: User }>());
export const deleteUser = createAction('[User] Delete User', props<{ id: number }>());