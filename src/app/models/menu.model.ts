import { BaseModel } from './base.model';

export class MenuModel extends BaseModel{
  children: MenuModel[];
  parent: MenuModel;

  constructor(public route: string | string[], public link: string, public activeClass: string, public exactRoute: boolean, children?: MenuModel[]) {
    super({});
    this.children = children ? children : [];
  }
}
