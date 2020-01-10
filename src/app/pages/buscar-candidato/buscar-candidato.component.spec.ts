import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCandidatoComponent } from './buscar-candidato.component';

describe('BuscarCandidatoComponent', () => {
  let component: BuscarCandidatoComponent;
  let fixture: ComponentFixture<BuscarCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
