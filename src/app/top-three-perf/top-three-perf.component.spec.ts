import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopThreePerfComponent } from './top-three-perf.component';

describe('TopThreePerfComponent', () => {
  let component: TopThreePerfComponent;
  let fixture: ComponentFixture<TopThreePerfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopThreePerfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopThreePerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
