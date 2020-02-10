import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPreOfertaComponent } from './editar-pre-oferta.component';

describe('EditarPreOfertaComponent', () => {
  let component: EditarPreOfertaComponent;
  let fixture: ComponentFixture<EditarPreOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarPreOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarPreOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
