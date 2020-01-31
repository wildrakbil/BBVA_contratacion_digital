import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextareasRedonlyComponent } from './textareas-redonly.component';

describe('TextareasRedonlyComponent', () => {
  let component: TextareasRedonlyComponent;
  let fixture: ComponentFixture<TextareasRedonlyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextareasRedonlyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextareasRedonlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
