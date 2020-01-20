import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressLinearComponent } from './progress-linear.component';

describe('ProgressLinearComponent', () => {
  let component: ProgressLinearComponent;
  let fixture: ComponentFixture<ProgressLinearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgressLinearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressLinearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
