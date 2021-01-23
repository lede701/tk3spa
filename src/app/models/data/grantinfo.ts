import { Injectable } from '@angular/core';

import { DataCore } from './data';

@Injectable()
export class GrantInfo extends DataCore{
  ObjectType: string = "GRANTINFO";

  tk3Id: string;
  localId: number;
  grantId: number;
  grantNum: string;
  projCode: string;
  grantDesc: string;
  grantType: number;
  commentType: number;
  status: number;
  created: Date;
  createdBy: number;
  modified: Date;
  modifiedBy: number;

  constructor(params?) {
    super(params);
  }
}
