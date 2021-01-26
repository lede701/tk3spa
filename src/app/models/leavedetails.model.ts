import { Injectable } from '@angular/core';

import { BaseModel } from './base.model';
import { LeaveTransaction } from './data/leaveTransaction';

@Injectable()
export class LeaveDetailsModel extends BaseModel {

  id: number;
  grantNum: string;
  projCode: string;

  daysData: {};

  constructor(params) {
    super(params);
  }

  getDayDetails(day: Date): LeaveTransaction {
    let dayKey = this.getDateKey(day);
    let ltDetails: LeaveTransaction = new LeaveTransaction();
    ltDetails.reqDate = day;
    // Check if data has been loaded for this date
    if (this.daysData[dayKey] !== undefined) {
      ltDetails = this.daysData[dayKey];
    }

    // Return the 
    return ltDetails;
  }

}
