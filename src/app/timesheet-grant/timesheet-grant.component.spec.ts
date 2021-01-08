import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetGrantComponent } from './timesheet-grant.component';

describe('TimesheetGrantComponent', () => {
  let component: TimesheetGrantComponent;
  let fixture: ComponentFixture<TimesheetGrantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetGrantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetGrantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
