import { Action } from '@ngrx/store';

import { MenuModel } from '../../models/menu.model';

export const ADD_MENUITEM = '[Menu] Add MenuItem';
export const UPDATE_MENUITEM = '[Menu] Update MenuItem';
export const DELETE_MEUITEM = '[Menu] Delete MenuItem';
export const START_EDIT = '[Menu] Start Edit';
export const STOP_EDIT = '[Menu] Stop Edit';

export class AddMenuItem implements Action {
  readonly type = ADD_MENUITEM;
  constructor(public payload: MenuModel) { }
}

export class UpdateMenuItem implements Action {
  readonly type = UPDATE_MENUITEM;
  constructor(public payload: { itemId: number, item: MenuModel }) {}
}

export class DeleteMenuItem implements Action {
  readonly type = DELETE_MEUITEM;
  constructor(public payload: number) {}
}

export type MenuActions = AddMenuItem | UpdateMenuItem | DeleteMenuItem;
