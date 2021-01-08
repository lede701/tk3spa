import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NameListComponent } from './name-list/name-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetDayListComponent } from './timesheet-day-list/timesheet-day-list.component';
import { TimesheetGrantComponent } from './timesheet-grant/timesheet-grant.component';
import { TimesheetLeaveComponent } from './timesheet-leave/timesheet-leave.component';
import { TimesheetLunchComponent } from './timesheet-lunch/timesheet-lunch.component';
import { TimesheetSumsComponent } from './timesheet-sums/timesheet-sums.component';
import { TimesheetSignaturesComponent } from './timesheet-signatures/timesheet-signatures.component';

@NgModule({
  declarations: [
    AppComponent,
    NameComponent,
    NameListComponent,
    TimesheetComponent,
    TimesheetDayListComponent,
    TimesheetGrantComponent,
    TimesheetLeaveComponent,
    TimesheetLunchComponent,
    TimesheetSumsComponent,
    TimesheetSignaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
