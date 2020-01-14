import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-asignacion-perfiles',
  templateUrl: './asignacion-perfiles.component.html',
  styleUrls: ['./asignacion-perfiles.component.scss']
})
export class AsignacionPerfilesComponent implements OnInit {
	public items = [
	{"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":50, "perfil":""},
	{"codigo":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "area":50, "perfil":""}
	];

  constructor() { }

  ngOnInit() {


  }
  public dropdownComponent(index: number) {
    console.log(index);
    classie.toggle(document.getElementById('combo_'+index), 'dropdown--open');

  }

}
