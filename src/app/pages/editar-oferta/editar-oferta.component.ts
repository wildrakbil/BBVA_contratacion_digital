import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-oferta',
  templateUrl: './editar-oferta.component.html',
  styleUrls: ['./editar-oferta.component.scss']
})
export class EditarOfertaComponent implements OnInit {

  public routerLinkPrevious ="/editar-pre-oferta";
  public routerLinkNext = "/preguntas-de-control";
  
  constructor(public _router:Router,public _location:Location) { }

  refresh():void{
    this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  ngOnInit() {
  }

}
