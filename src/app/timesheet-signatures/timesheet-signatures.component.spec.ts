import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimesheetSignaturesComponent } from './timesheet-signatures.component';

describe('TimesheetSignaturesComponent', () => {
  let component: TimesheetSignaturesComponent;
  let fixture: ComponentFixture<TimesheetSignaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimesheetSignaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimesheetSignaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
