import { Injectable } from "@angular/core";
import { Timesheet } from '../models/sheet.model';

@Injectable()
export class TimesheetService {
  private timeSheets: Timesheet[];
  private currTimesheet: number;

  constructor() {
    this.timeSheets = [];
    this.timeSheets.push(new Timesheet());
    this.currTimesheet = 0;
  }

  getCurrentTimesheet(): Timesheet {
    return this.timeSheets[this.currTimesheet];
  }
}
