import { Action } from '@ngrx/store';

export const AUTH_LOGIN = '[Auth] Login';
export const AUTH_LOGOUT = '[Auth] Logout';
export const AUTH_CREATE = '[Auth] Create';
export const AUTH_START = '[Auth] Start';
export const AUTH_END = '[Auth] End';

export class AuthLogin implements Action {
  readonly type = AUTH_LOGIN;

  constructor(public payload: { username: string; password: string; }) { }
}

export class AuthLogout implements Action {
  readonly type = AUTH_LOGOUT;
}

export class AuthCreate implements Action {
  readonly type = AUTH_CREATE;

  constructor(public payload: { username: string; password: string }) { }
}

export type AuthActions = AuthLogin | AuthLogout | AuthCreate;
