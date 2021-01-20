import { Component, OnInit, Input } from '@angular/core';
import { Timesheet } from '../../models/sheet.model';
import { TimeDetails } from '../../models/timedetails.model';

@Component({
  selector: 'app-timesheet-day-list',
  templateUrl: './timesheet-day-list.component.html',
  styleUrls: ['./timesheet-day-list.component.less']
})
export class TimesheetDayListComponent implements OnInit {

  @Input() timesheet: Timesheet;

  constructor() {
  }

  ngOnInit(): void {
  }

  getMonth(): string {
    return this.timesheet.getMonth();
  }

  getDay(day: Date): string {
    let dayLookup: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return dayLookup[day.getDay()];
  }

  getDayList(): Date[] {
    return this.timesheet.getDaysList();
  }

  getDayClass(day: Date): string {
    let css = 'day-weekday';
    if (day.getDay() == 0 || day.getDay() == 6) {
      css = 'day-weekend';
    }

    return css;
  }

  onClickDay(day: Date) {
    console.log(day);
    return false;
  }

}
