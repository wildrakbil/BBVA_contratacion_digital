import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreOfertaComponent } from './pre-oferta.component';

describe('PreOfertaComponent', () => {
  let component: PreOfertaComponent;
  let fixture: ComponentFixture<PreOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
