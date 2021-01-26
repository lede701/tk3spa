import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, ActivationEnd } from '@angular/router';
import { Subscription } from 'rxjs';

import { TimesheetService } from '../../timesheet/timesheet.service';
import { TimeDetails } from '../../models/timedetails.model';
import { GrantDetails } from '../../models/grantdetails.model';
import { Timesheet } from '../../models/sheet.model';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.less']
})
export class DayDetailsComponent implements OnInit, OnDestroy {

  paramsSubscription: Subscription;
  timeDetails: TimeDetails
  ts: Timesheet;
  day: Date;

  dayForm: FormGroup;

  constructor(private tsService: TimesheetService, private router: Router, private actRoute: ActivatedRoute) {
    // Check if the route has a defined child
    if (Object.keys(this.actRoute).indexOf('firstChild') === -1) {
      console.log(this.actRoute);
      // Redirect to either current day if within date range or first day on timesheet
      let now: Date = new Date();
      let day: Date = now;
      let ts = this.tsService.getCurrentTimesheet();
      if (!(now.getTime() > ts.startDate.getTime() && now.getTime() <= ts.endDate.getTime())) {
        day = ts.endDate;
      }
      let dayKey = ts.getDateKey(day);
      this.router.navigate(['day', dayKey]);
    }
  }

  ngOnInit(): void {
    this.ts = this.tsService.getCurrentTimesheet();
    // Subscribe to the parameters object in firstChild
    this.actRoute.firstChild.params.subscribe(params => {
      // Check for valid unput from the route param object
      if (params != undefined && Object.keys(params).includes('day')) {
        // Create date from the day parameter
        this.day = new Date(params['day']);
      }
    });

    // Bind form to our form group
    this.dayForm = new FormGroup({
      'hrWorked': new FormControl(null),
      'comment': new FormControl(null)
    });
  }

  getGrantDetailList(): GrantDetails[] {
    return this.ts.getGrantList();
  }

  ngOnDestroy(): void {
    if (this.paramsSubscription !== undefined) {
      this.paramsSubscription.unsubscribe();
    }
  }

  onSaveDay() {
    console.log(this.dayForm.value);
  }

}
