import * as AuthActions from './auth.actions';

const initialState = {user: null}

export function AuthReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {

    default:
      return state;
  }
}
