import { Component, OnInit, Input } from '@angular/core';
import { Timesheet } from '../models/sheet.model';

@Component({
  selector: 'app-timesheet-header',
  templateUrl: './timesheet-header.component.html',
  styleUrls: ['./timesheet-header.component.less']
})
export class TimesheetHeaderComponent implements OnInit {

  @Input() timesheet: Timesheet;

  constructor() { }

  ngOnInit(): void {
  }

  getLastFirstName(): string{
    return this.timesheet.getLastFirstName();
  }

  getTitle(): string {
    return this.timesheet.getTitle();
  }

  getFullMonth(): string {
    return this.timesheet.getFullMonth();
  }

  getTimesheetHours(): number {
    return this.timesheet.getTimesheetHours();
  }

  getEmployeeStatus(): string {
    return this.timesheet.getEmployeeStatus();
  }

  getTimesheetYear(): string {
    return this.timesheet.getTimesheetYear();
  }
}
