import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetLeaveComponent } from './timesheet-leave.component';

describe('TimesheetLeaveComponent', () => {
  let component: TimesheetLeaveComponent;
  let fixture: ComponentFixture<TimesheetLeaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetLeaveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
