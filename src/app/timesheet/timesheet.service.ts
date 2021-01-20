import { Injectable } from "@angular/core";
import { Timesheet } from '../models/sheet.model';

@Injectable()
export class TimesheetService {
  private timeSheets: Timesheet[];

  constructor() {}
}
