import { User } from "./user.model";

export class UserSettings {

  id: number;
  u_id: number;
  workScheduleId: number;
  workHoursPerWeek: number;
  created: Date;
  createdBy: number;
  modified: Date;
  modifiedBy: number;
  status: number;

  parent: User;

  constructor(parent: User, params) {
    this.parent = parent;
    if (params !== undefined) {
      for (let key in params) {
        this[key] = params[key];
      }
    }
  }

  getUser(): User {
    return this.parent;
  }
}
