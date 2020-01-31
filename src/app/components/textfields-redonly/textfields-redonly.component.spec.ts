import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextfieldsRedonlyComponent } from './textfields-redonly.component';

describe('TextfieldsRedonlyComponent', () => {
  let component: TextfieldsRedonlyComponent;
  let fixture: ComponentFixture<TextfieldsRedonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextfieldsRedonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextfieldsRedonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
