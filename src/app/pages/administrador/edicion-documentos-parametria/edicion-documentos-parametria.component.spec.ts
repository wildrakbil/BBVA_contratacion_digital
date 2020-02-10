import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDocumentosParametriaComponent } from './edicion-documentos-parametria.component';

describe('EdicionDocumentosParametriaComponent', () => {
  let component: EdicionDocumentosParametriaComponent;
  let fixture: ComponentFixture<EdicionDocumentosParametriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDocumentosParametriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDocumentosParametriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
