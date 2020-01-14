import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionPerfilesComponent } from './asignacion-perfiles.component';

describe('AsignacionPerfilesComponent', () => {
  let component: AsignacionPerfilesComponent;
  let fixture: ComponentFixture<AsignacionPerfilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionPerfilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionPerfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
