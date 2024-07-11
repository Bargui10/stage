import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfByShiftComponent } from './perf-by-shift.component';

describe('PerfByShiftComponent', () => {
  let component: PerfByShiftComponent;
  let fixture: ComponentFixture<PerfByShiftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerfByShiftComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfByShiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
