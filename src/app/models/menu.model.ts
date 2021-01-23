import { BaseModel } from './base.model';

export class MenuModel extends BaseModel{
  constructor(public route: string | string[], public link: string, public activeClass: string, public exactRoute: boolean) {
    super({});
  }
}
