import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfewcomponentComponent } from './lastfewcomponent.component';

describe('LastfewcomponentComponent', () => {
  let component: LastfewcomponentComponent;
  let fixture: ComponentFixture<LastfewcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastfewcomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastfewcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
