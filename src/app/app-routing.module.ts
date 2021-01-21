import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home-component/home-component.component';
import { TimesheetComponent } from './timesheet/timesheet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'timesheet', component: TimesheetComponent, children: [
      { path: 'day/:id/:grant', component: TimesheetComponent },
      { path: 'leave/:id/:day', component: TimesheetComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
