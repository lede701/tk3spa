import { Component, OnInit } from '@angular/core';
import { Timesheet } from "../models/sheet.model";
import { TimeDetails } from '../models/timedetails.model';
import { LoggerService } from '../shared/logger.service';
import { TimesheetService } from './timesheet.service';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.less']
})
export class TimesheetComponent implements OnInit {

  ts: Timesheet;

  constructor(private log: LoggerService, private tsService: TimesheetService) {
    this.ts = tsService.getCurrentTimesheet();
    this.ts.load(42957);
  }

  ngOnInit(): void {
  }

  onDayClicked(td: TimeDetails) {
    this.log.write(td);
  }

}
