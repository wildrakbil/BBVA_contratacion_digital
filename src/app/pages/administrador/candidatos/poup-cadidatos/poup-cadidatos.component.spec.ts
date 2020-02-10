import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoupCadidatosComponent } from './poup-cadidatos.component';

describe('PoupCadidatosComponent', () => {
  let component: PoupCadidatosComponent;
  let fixture: ComponentFixture<PoupCadidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoupCadidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoupCadidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
