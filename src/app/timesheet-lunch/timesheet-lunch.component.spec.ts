import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetLunchComponent } from './timesheet-lunch.component';

describe('TimesheetLunchComponent', () => {
  let component: TimesheetLunchComponent;
  let fixture: ComponentFixture<TimesheetLunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetLunchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetLunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
