import { Component, OnInit, Input } from '@angular/core';
import { Timesheet } from '../models/sheet.model';

@Component({
  selector: 'app-timesheet-day-list',
  templateUrl: './timesheet-day-list.component.html',
  styleUrls: ['./timesheet-day-list.component.css']
})
export class TimesheetDayListComponent implements OnInit {

  @Input() timesheet: Timesheet;

  Days: Array<Date>;

  constructor() {
    this.Days = [];
  }

  ngOnInit(): void {
    // Create start day of time sheet
    let day = new Date(`${this.timesheet.startDate.getDate()}/${this.timesheet.startDate.getMonth() + 1}/${this.timesheet.startDate.getFullYear()} 10:00 AM`);
    // Create a break point for runaway loops
    let runLoop = 0;
    let runAwayThreshold = 50;
    // Put start date into the list of days
    this.Days.push(new Date(day));
    // Create list of days between start and end dates
    while (day.valueOf() < this.timesheet.endDate.valueOf()) {
      // Add one day to the day date
      day.setDate(day.getDate() + 1);
      // Puch next day in list to the days array
      this.Days.push(new Date(day));
      // Check if loop is no running away
      if (runLoop++ > runAwayThreshold) {
        // Report there was an error in build list of days for this time sheet!
        console.error("app-timesheet-day-list day loop has exceeded its limit!")
        break;
      }
    }
  }

  getMonth(): string {
    return this.timesheet.getMonth();
  }

}
