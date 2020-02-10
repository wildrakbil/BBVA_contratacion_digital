import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-asignacion-perfiles',
  templateUrl: './asignacion-perfiles.component.html',
  styleUrls: ['./asignacion-perfiles.component.scss']
})
export class AsignacionPerfilesComponent implements OnInit {

  public routerLinkPrevious ="/autorizaciones";
  public routerLinkNext = "/edicion-documentos-electronicos";

  

	public items = [
	{"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
	{"codigo":"123456","nombre":"carlo", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"juan", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"pedro", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"caren", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"sofia", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"diana", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"amanda", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"jose", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"maria", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"julia", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"yulua", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"cesar", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"diego", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""}
  ];

  constructor(public _router:Router,public _location:Location) { 

  }

  ngOnInit() {
  }
  public dropdownComponent(index: number) {
    classie.toggle(document.getElementById('combo_'+index), 'dropdown--open');
  }

  public setAsValue(index: number,opcion:string){
    document.getElementById('dropdown__text_'+index).innerHTML = opcion;
  }

  public new_user_open(){
    classie.toggle( document.getElementById('new_user'),'display_none');
  }

  public edit_user(index:number){
    for (var i = 1 ; i <= 5; i++) {
      classie.toggle(document.getElementById('div_'+i+'_'+index), 'display_none');
      classie.toggle(document.getElementById('text_'+i+'_'+index), 'display_none');
    }
  }

  //items: string[] = ["uno","dos","tres"];

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 2,
    currentPage: 1
  };

   refresh():void{
    this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }


}
