import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';

@Component({
	selector: 'app-preguntas-de-control',
	templateUrl: './preguntas-de-control.component.html',
	styleUrls: ['./preguntas-de-control.component.scss']
})
export class PreguntasDeControlComponent implements OnInit {

	public routerLinkPrevious ="/editar-oferta";
	public routerLinkNext = "/candidatos";

	public items = [
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true},
	{"documento":"123456", "visible":true}
	];


	constructor() { }

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
