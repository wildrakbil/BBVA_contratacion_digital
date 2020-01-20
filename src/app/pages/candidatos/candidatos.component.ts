import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';

@Component({
	selector: 'app-candidatos',
	templateUrl: './candidatos.component.html',
	styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

	public routerLinkPrevious ="/preguntas-de-control";
	public routerLinkNext = "";

	public items = [
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":50},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":100},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":0},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":100},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":50},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":100},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":0},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":0},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":100},
	{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com","tipoContrato":"indefinido","empresa":"BBVA","area":"Contabilidad", "estado":50}
	]


	constructor() { }

	ngOnInit() {
	}

	 public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };

}
