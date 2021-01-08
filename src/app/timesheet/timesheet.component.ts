import { Component, OnInit } from '@angular/core';
import { Timesheet } from "../models/sheet.model";

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  ts: Timesheet;

  constructor() {
    this.ts = new Timesheet();
    this.ts.load(42957);
  }

  ngOnInit(): void {
  }

}
