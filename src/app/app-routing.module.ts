import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { LeaveComponent } from './leave/leave.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'timesheet', component: TimesheetComponent, children: [
      { path: 'day/:id/:grant', component: TimesheetComponent },
      { path: 'leave/:id/:day', component: TimesheetComponent }
    ]
  },
  { path: 'leave', component: LeaveComponent },
  {
    path: 'auth', component: AuthComponent, children: [
      { path: ':type', component: AuthComponent }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
