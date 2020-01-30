import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroHeaderComponent } from './registro-header.component';

describe('RegistroHeaderComponent', () => {
  let component: RegistroHeaderComponent;
  let fixture: ComponentFixture<RegistroHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
