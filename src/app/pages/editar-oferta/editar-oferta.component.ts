import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.component.html',
  styleUrls: ['./editar-oferta.component.scss']
})
export class EditarOfertaComponent implements OnInit {

  public routerLinkPrevious ="/editar-pre-oferta";
  public routerLinkNext = "/preguntas-de-control";


  constructor() { }

  ngOnInit() {
  }

}
