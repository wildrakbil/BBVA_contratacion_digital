import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edicion-documentos-electronicos',
  templateUrl: './edicion-documentos-electronicos.component.html',
  styleUrls: ['./edicion-documentos-electronicos.component.scss']
})
export class EdicionDocumentosElectronicosComponent implements OnInit {
 

  public routerLinkPrevious ="/asignacion-perfiles";
  public routerLinkNext = "/editar-pre-oferta";

  constructor() { }

  ngOnInit() {
  }

}
