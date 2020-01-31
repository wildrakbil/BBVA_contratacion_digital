import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';


@Component({
	selector: 'app-informacion',
	templateUrl: './informacion.component.html',
	styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

	error_0 : string = "ERROR MENSSAGE";

	//Configuracion Input
	textfielConfig : string = "input--bg-white-grey";

	textfielConfig_2 : string = "input--bg-white-grey input--readonly";
	inputLabel_0 : string = "Incluya la posicion en People Soft a ocupar";
	inputLabel_1 : string = "Incluya el cargo a ocupar por el candidato";
	inputLabel_2 : string = "AEV";
	inputLabel_3 : string = "Bono";

	//Config checkboxes

	controltext_0 :string= "Salario Básico a incluir";
	controltext_1 :string= "Sueldo integral";

	//config textarea
	textareaConfig = "input--bg-white-grey";
	textareaLabel = "Consepto final del candidato";



	constructor() { }

	ngOnInit() {
		
	}

}
