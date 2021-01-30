import { Injectable } from '@angular/core';

import { BaseModel } from './base.model';
import { TimeDetails } from './timedetails.model';

@Injectable()
export class GrantDetails extends BaseModel {

  id: number;
  grantNum: string;
  projCode: string;

  daysData: {};

  constructor(params?:any) {
    super(params);
  }

  getGrantCode() {
    return `${this.grantNum}-${this.projCode}`;
  }

  getGrantId(): number {
    return this.id;
  }

  getDayDetails(day?: Date): TimeDetails {
    let td = new TimeDetails({ tDate: day, hrWorked: 8.0 });
    let dayKey = this.getDateKey(day);
    if (this.daysData[dayKey] !== undefined) {
      td = this.daysData[dayKey];
    }

    return td;
  }

  getGrantSum(): string {
    // Get list of keys in the daysData object
    let dataKeys = Object.keys(this.daysData);
    // Setup sum for this grant
    let sum = 0;
    for (let key in dataKeys) {
      let day: TimeDetails = this.daysData[dataKeys[key]];
      if (day.hrWorked !== undefined) {
        sum += day.hrWorked;
      }
    }
    return sum > 0 ? `${sum}` : '';
  }

}
