import { Timesheet } from './sheet.model';

export class TimeDetails {
  id: number;
  g_id: number;
  ts_id: number;
  status: number;
  hrWorked: number;
  tDate: Date;

  constructor() {

  }

  loadSheet(ts: Timesheet): TimeDetails[] {
    // Initialize data array
    let data: TimeDetails[] = [];

    return data;
  }
}
