import { Component, OnInit } from '@angular/core';

import { LoggerService } from '../shared/logger.service';
import { TimesheetService } from '../timesheet/timesheet.service';
import { Timesheet } from '../models/sheet.model';

@Component({
  selector: 'app-daysheet',
  templateUrl: './daysheet.component.html',
  styleUrls: ['./daysheet.component.less']
})
export class DaysheetComponent implements OnInit {
  ts: Timesheet;

  constructor(private log: LoggerService, private tsService: TimesheetService) {
    this.ts = tsService.getCurrentTimesheet();
    this.ts.load(42957);
  }

  ngOnInit(): void {
  }

}
