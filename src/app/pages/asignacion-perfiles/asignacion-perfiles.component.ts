import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';


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
	{"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""},
  {"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":'Calidad', "perfil":""}
  ];

  constructor() { 

  }
  pageActual: number =1 ;

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


}
