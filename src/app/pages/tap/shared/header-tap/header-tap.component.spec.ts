import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTapComponent } from './header-tap.component';

describe('HeaderTapComponent', () => {
  let component: HeaderTapComponent;
  let fixture: ComponentFixture<HeaderTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
