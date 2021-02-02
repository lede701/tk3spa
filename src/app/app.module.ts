import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameComponent } from './name/name.component';
import { NameListComponent } from './name-list/name-list.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetDayListComponent } from './timesheet/timesheet-day-list/timesheet-day-list.component';
import { TimesheetGrantComponent } from './timesheet/timesheet-grant/timesheet-grant.component';
import { TimesheetLeaveComponent } from './timesheet/timesheet-leave/timesheet-leave.component';
import { TimesheetLunchComponent } from './timesheet/timesheet-lunch/timesheet-lunch.component';
import { TimesheetSumsComponent } from './timesheet/timesheet-sums/timesheet-sums.component';
import { TimesheetSignaturesComponent } from './timesheet/timesheet-signatures/timesheet-signatures.component';
import { TimesheetHeaderComponent } from './timesheet/timesheet-header/timesheet-header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { MenuEditComponent } from './menu/menu-edit/menu-edit.component';
import { LeaveComponent } from './leave/leave.component';
import { AuthComponent } from './auth/auth.component';
import { DaysheetComponent } from './daysheet/daysheet.component';
import { DayslistComponent } from './daysheet/dayslist/dayslist.component';
import { TimesheetService } from './timesheet/timesheet.service';
import { DayDetailsComponent } from './daysheet/day-details/day-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from './shared/spinner/spinner.component';

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
    TimesheetSignaturesComponent,
    TimesheetHeaderComponent,
    HomeComponent,
    MenuComponent,
    MenuEditComponent,
    LeaveComponent,
    AuthComponent,
    DaysheetComponent,
    DayslistComponent,
    DayDetailsComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [TimesheetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
