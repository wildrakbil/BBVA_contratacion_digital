import { Component, OnInit } from '@angular/core';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-candidatos',
  templateUrl: './candidatos.component.html',
  styleUrls: ['./candidatos.component.scss']
})
export class CandidatosComponent implements OnInit {

	public items: any = [
		{"identificacion": "1234875309","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875310","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875311","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875312","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875313","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875314","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875315","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875316","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875317","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875318","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":true},
		{"identificacion": "1234875319","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875320","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875321","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finalizado":false},
		{"identificacion": "1234875322","nonbre": "Juan","apellido": "Perez Rodriguez","correo": "juanRodri@gmail.com","contrato": "Indefinido","empresa": "BBVA","area": "Contabilidad","finaliado":false}

	]

  constructor(config: NgbPaginationConfig) { }

  ngOnInit() {
  }

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 7,
    currentPage: 1
  };


}
