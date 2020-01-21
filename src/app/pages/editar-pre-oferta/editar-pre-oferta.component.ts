import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-pre-oferta',
  templateUrl: './editar-pre-oferta.component.html',
  styleUrls: ['./editar-pre-oferta.component.scss']
})
export class EditarPreOfertaComponent implements OnInit {
  
  public routerLinkPrevious ="/edicion-documentos-electronicos";
  public routerLinkNext = "/editar-oferta";
  exit() {
     	window.location.reload();
    }


  constructor() { }

  ngOnInit() {
  }

}
