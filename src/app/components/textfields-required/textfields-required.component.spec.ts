import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldsRequiredComponent } from './textfields-required.component';

describe('TextfieldsRequiredComponent', () => {
  let component: TextfieldsRequiredComponent;
  let fixture: ComponentFixture<TextfieldsRequiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldsRequiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldsRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
