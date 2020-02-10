import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-preguntas-de-control',
	templateUrl: './preguntas-de-control.component.html',
	styleUrls: ['./preguntas-de-control.component.scss']
})
export class PreguntasDeControlComponent implements OnInit {

	public routerLinkPrevious ="/editar-oferta";
	public routerLinkNext = "/candidatos";

	public items = [
	{"documento":"Pregunta de control 1", "visible":true},
	{"documento":"Pregunta de control 2", "visible":true},
	{"documento":"Pregunta de control 3", "visible":true},
	{"documento":"Pregunta de control 4", "visible":true},
	{"documento":"Pregunta de control 5", "visible":true},
	{"documento":"Pregunta de control 6", "visible":true},
	{"documento":"Pregunta de control 7", "visible":true},
	{"documento":"Pregunta de control 8", "visible":true}
	];


	
	constructor(public _router:Router,public _location:Location) { }

	refresh():void{
		this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
			console.log(decodeURI(this._location.path()));
			this._router.navigate([decodeURI(this._location.path())]);
		});
	}

	ngOnInit() {
	}
	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: 4,
		currentPage: 1
	};

	public setAsValue(index: number,opcion:string){
		document.getElementById('dropdown__text_'+index).innerHTML = opcion;
	}

	public dropdownComponent(index: number) {
		classie.toggle(document.getElementById('combo_'+index), 'dropdown--open');
		classie.add(document.getElementById('combo_label_'+index), 'input__label--active');

	}

	public edit_aut(index:number){
		for (var i = 1 ; i <= 5; i++) {
			classie.toggle(document.getElementById('div_'+i+'_'+index), 'display_none');
			classie.toggle(document.getElementById('text_'+i+'_'+index), 'display_none');
		}

	}

	public new_user_open(){
		classie.toggle( document.getElementById('new_user'),'display_none');
	}

}
