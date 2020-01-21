import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {PaginationInstance} from 'ngx-pagination';
import * as classie from 'classie';

@Component({
  selector: 'app-buscar-candidato',
  templateUrl: './buscar-candidato.component.html',
  styleUrls: ['./buscar-candidato.component.scss'],
  providers: [NgbPaginationConfig]
})

export class BuscarCandidatoComponent{
	public items = [
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"juan", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":100},
{"idectificacion":"123456","nombre":"carlos", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":100},
{"idectificacion":"123456","nombre":"sofia", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":0},
{"idectificacion":"123456","nombre":"Mirian", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":0},
{"idectificacion":"123456","nombre":"camilo", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":100},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"diego", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":0},
{"idectificacion":"123456","nombre":"jose", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":100},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"maria", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50},
{"idectificacion":"123456","nombre":"alomso", "apellido":"asdfvcx","email":"asdasd@asdfdf.com", "estado":50}	
];
 

  constructor(config: NgbPaginationConfig) { 
  	document.getElementById('search__aside').style.visibility = "visible";
  	document.getElementById('serach_principal').style.display = "none";
  	config.size = 'sm';
    config.boundaryLinks = true;

  }

  ngOnInit() {
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 4,
    currentPage: 1
  };

}
