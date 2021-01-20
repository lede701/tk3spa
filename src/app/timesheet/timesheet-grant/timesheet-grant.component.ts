import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Timesheet } from "../../models/sheet.model";
import { GrantDetails } from "../../models/grantdetails.model";
import { TimeDetails } from '../../models/timedetails.model';

@Component({
  selector: 'app-timesheet-grant',
  templateUrl: './timesheet-grant.component.html',
  styleUrls: ['./timesheet-grant.component.less']
})
export class TimesheetGrantComponent implements OnInit {

  @Output() dayClicked = new EventEmitter<TimeDetails>();

  @Input() timesheet: Timesheet;

  constructor() { }

  ngOnInit(): void {
  }

  getDaysList(): Date[] {
    return this.timesheet.getDaysList();
  }

  getGrantList(): GrantDetails[] {
    return this.timesheet.getGrantList();
  }

  getDayDetails(grant: GrantDetails, day: Date): TimeDetails {
    return grant.getDayDetails(day);
  }

  formatTime(time): string {
    // Make sure there is something to put in the day slot
    let ftime = "&nbsp;";
    // Check if the time is valid
    if (time !== undefined) {
      ftime = time;
    }

    // Return trhe formatted string
    return ftime;
  }
  getCommentMarkerClass(td: TimeDetails): string {
    let markerClass = "comment-empty";
    if (td.comment !== undefined && td.comment.length > 0) {
      markerClass = "comment-filled";
    }
    return markerClass;
  }

  onEditDay(td: TimeDetails) {
    this.dayClicked.emit(td);
  }
}
