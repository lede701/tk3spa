import { BaseModel } from './base.model';
import { TimeDetails } from './timedetails.model';

export class GrantDetails extends BaseModel {

  id: number;
  grantNum: string;
  projCode: string;

  data: TimeDetails[];
  daysData: {};

  constructor(params?:any) {
    super(params);
  }

  getGrantCode() {
    return `${this.grantNum}-${this.projCode}`;
  }

  getDayDetails(day?: Date): TimeDetails {
    let td = new TimeDetails({ tDate: day, hrWorked: 8.0 });
    let dayKey = this.getDateKey(day);
    if (this.daysData[dayKey] !== undefined) {
      td = this.daysData[dayKey];
    }

    return td;
  }
}
