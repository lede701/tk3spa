import { Injectable } from '@angular/core';

import { DataCore } from './data';

@Injectable()
export class TimeDetails extends DataCore {
  ObjectType: "TIMEDETAILS";

  tk3Id: string;
  localId: number;
  g_id: number;
  ts_id: number;
  status: number;
  hrWorked: number;
  tDate: Date;
  comment: string;
}
