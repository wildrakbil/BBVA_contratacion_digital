import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdicionDocumentosElectronicosComponent } from './edicion-documentos-electronicos.component';

describe('EdicionDocumentosElectronicosComponent', () => {
  let component: EdicionDocumentosElectronicosComponent;
  let fixture: ComponentFixture<EdicionDocumentosElectronicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdicionDocumentosElectronicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdicionDocumentosElectronicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
