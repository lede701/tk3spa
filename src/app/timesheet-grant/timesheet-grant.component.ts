import { Component, OnInit, Input } from '@angular/core';
import { Timesheet } from "../models/sheet.model";

@Component({
  selector: 'app-timesheet-grant',
  templateUrl: './timesheet-grant.component.html',
  styleUrls: ['./timesheet-grant.component.less']
})
export class TimesheetGrantComponent implements OnInit {

  @Input() timesheet: Timesheet;

  constructor() { }

  ngOnInit(): void {
  }

}
