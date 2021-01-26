import { Injectable } from '@angular/core';

import { DataCore } from './data';

@Injectable()
export class LeaveTransaction extends DataCore{
  ObjectType: string = "LEAVETRANSACTION";

  tk3Id: string;
  localId: number;
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
}
