import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetDayListComponent } from './timesheet-day-list.component';

describe('TimesheetDayListComponent', () => {
  let component: TimesheetDayListComponent;
  let fixture: ComponentFixture<TimesheetDayListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetDayListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetDayListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
