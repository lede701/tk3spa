import { Component, OnInit } from '@angular/core';

import { TimesheetService } from '../../timesheet/timesheet.service';
import { Timesheet } from '../../models/sheet.model';

@Component({
  selector: 'app-dayslist',
  templateUrl: './dayslist.component.html',
  styleUrls: ['./dayslist.component.less']
})
export class DayslistComponent implements OnInit {
  daysList: Date[];
  ts: Timesheet;

  constructor(private tsService: TimesheetService) {
  }

  ngOnInit(): void {
    this.ts = this.tsService.getCurrentTimesheet();
    this.daysList = this.ts.getDaysList();
  }

  getDateKey(day: Date): string {
    return this.ts.getDateKey(day);
  }
}
