import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';
import {BotonesComponent} from '../../components/botones/botones.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


import { Observable,of } from 'rxjs';


@Component({
	selector: 'app-edicion-documentos-parametria',
	templateUrl: './edicion-documentos-parametria.component.html',
	styleUrls: ['./edicion-documentos-parametria.component.scss']
})
export class EdicionDocumentosParametriaComponent implements OnInit {


	public routerLinkNext = "/autorizaciones";
	public routerLinkPrevious ="/home";

	public items = [
	{"documento":"Carta modificaciones salariales","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Carta translados y movimientos","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Cesantias","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Certificación","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Documento procesos diciplinarios","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Documento mapa laboral","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Carta incentivación","tap":true, "sevicing":true,"contratacion":true, "visible":true},
	{"documento":"Aprobación","tap":true, "sevicing":true,"contratacion":true, "visible":true}
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

	public dropdownComponent(index: number) {
		classie.toggle(document.getElementById('combo_'+index), 'dropdown--open');
		classie.add(document.getElementById('combo_label_'+index), 'input__label--active');

	}
	public setAsValue(index: number,opcion:string){
		document.getElementById('dropdown__text_'+index).innerHTML = opcion;
	}


	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: 4,
		currentPage: 1
	};

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
