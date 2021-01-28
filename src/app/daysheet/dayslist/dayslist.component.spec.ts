import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayslistComponent } from './dayslist.component';

describe('DayslistComponent', () => {
  let component: DayslistComponent;
  let fixture: ComponentFixture<DayslistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayslistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
