import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { MatDialog, MatDialogConfig} from '@angular/material';
import { PoupCadidatosComponent} from './poup-cadidatos/poup-cadidatos.component';

@Component({
	selector: 'app-candidatos',
	templateUrl: './candidatos.component.html',
	styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

	public routerLinkPrevious ="/preguntas-de-control";
	public routerLinkNext = "";

	public items = [
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"},
	{"idectificacion":"123456","nombre":"juan", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"Finalizado"},
	{"idectificacion":"123456","nombre":"carlos", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"},
	{"idectificacion":"123456","nombre":"diego", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"Finalizado"},
	{"idectificacion":"123456","nombre":"maria", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"},
	{"idectificacion":"123456","nombre":"jose", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"Finalizado"},
	{"idectificacion":"123456","nombre":"baltasar", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"},
	{"idectificacion":"123456","nombre":"melchor", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"Finalizado"},
	{"idectificacion":"123456","nombre":"gasparin", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":"En proceso"}
	]


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


	onCreate(){
		/*const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = "46%"; 
		this.dialog.open(PoupCadidatosComponent,dialogConfig);*/
	}

}
