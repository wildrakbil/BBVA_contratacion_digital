import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';


@Component({
	selector: 'app-informacion',
	templateUrl: './informacion.component.html',
	styleUrls: ['./informacion.component.scss']
})
export class InformacionComponent implements OnInit {

	error_0 : string = "Campos requeridos";

	//Configuracion Input
	textfielConfig : string = "input--bg-white-grey";

	textfielConfig_2 : string = "input--bg-white-grey input--readonly";
	inputLabel_0 : string = "Incluya la posición en People Soft a ocupar";
	inputLabel_1 : string = "Incluya el cargo a ocupar por el candidato";
	inputLabel_2 : string = "AEV";
	inputLabel_3 : string = "Bono";

	//Config checkboxes

	controltext_0 :string= "Salario Básico a incluir";
	controltext_1 :string= "Sueldo integral";

	//config textarea
	textareaConfig = "input--bg-white-grey";
	textareaLabel = "Concepto final del candidato";



	constructor() { }

	ngOnInit() {
		
	}

	validar(){
		// validar textfield obligatgorios
		let textfieldList :any = [2,3];
		textfieldList.forEach(function (value){
			if(document.getElementById("white_background_textfield_"+value).getAttribute("ng-reflect-model") == ''){
				classie.remove(document.getElementById("white_background_textfield_"+value), 'ng-pristine', 'ng-valid', 'ng-touched');
				classie.add(document.getElementById("white_background_textfield_"+value), 'input--error');
			}
		});
	}

}
