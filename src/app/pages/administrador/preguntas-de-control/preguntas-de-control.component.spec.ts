import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreguntasDeControlComponent } from './preguntas-de-control.component';

describe('PreguntasDeControlComponent', () => {
  let component: PreguntasDeControlComponent;
  let fixture: ComponentFixture<PreguntasDeControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreguntasDeControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreguntasDeControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
