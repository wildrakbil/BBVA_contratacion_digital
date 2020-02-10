import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTapComponent } from './home-tap.component';

describe('HomeTapComponent', () => {
  let component: HomeTapComponent;
  let fixture: ComponentFixture<HomeTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
