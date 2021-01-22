import { Injectable } from '@angular/core';

import { BaseModel } from './base.model';

@Injectable()
export class LeaveDetailsModel extends BaseModel {

  id: number;
  grantNum: string;
  projCode: string;

  daysData: {};

  userId: number;
  parentId: number;
  locationId: number;
  bank: string;
  tranType: string;
  tranTime: number;
  tranDate: Date;
  reqDate: Date;
  empSign: number;
  approval: number;
  isAccrual: boolean;
  isParent: number;
  created: Date;
  createdBy: number;
  modified: Date;
  modifiedBy: number;
  status: number;

  constructor(params) {
    super(params);
  }

}
