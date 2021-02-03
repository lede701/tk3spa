import * as MenuAction from './menu.actions';

import { MenuModel } from '../../models/menu.model';

const initialState = {
  menuItems: [
    new MenuModel('/', 'Home', 'is-active', true),
    new MenuModel(['auth', 'login'], 'Login', 'is-active', false)
  ]
};

export function MenuReducer(state = initialState, action: MenuAction.MenuActions) {
  switch (action.type) {
    case MenuAction.ADD_MENUITEM:
      return {
        ...state,
        menuItems: [...state.menuItems, action.payload]
      }
      break;
  }
}
