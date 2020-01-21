import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-editar-pre-oferta',
  templateUrl: './editar-pre-oferta.component.html',
  styleUrls: ['./editar-pre-oferta.component.scss']
})
export class EditarPreOfertaComponent implements OnInit {

  public routerLinkPrevious ="/edicion-documentos-electronicos";
  public routerLinkNext = "/editar-oferta";

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
