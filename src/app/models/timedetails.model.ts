import { Timesheet } from './sheet.model';
import { BaseModel } from './base.model';

export class TimeDetails extends BaseModel {
  TYPE: string = "TimeDetails";
  id: number;
  g_id: number;
  ts_id: number;
  status: number;
  hrWorked: number;
  tDate: Date;
  comment: string;

  constructor(params?: any) {
    super(params);
  }

  loadSheet(ts: Timesheet): TimeDetails[] {
    // Initialize data array
    let data: TimeDetails[] = [];

    return data;
  }
}
