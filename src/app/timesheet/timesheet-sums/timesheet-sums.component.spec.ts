import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetSumsComponent } from './timesheet-sums.component';

describe('TimesheetSumsComponent', () => {
  let component: TimesheetSumsComponent;
  let fixture: ComponentFixture<TimesheetSumsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetSumsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetSumsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
