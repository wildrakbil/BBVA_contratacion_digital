import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-preguntas',
	templateUrl: './preguntas.component.html',
	styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

	items :any =[
		{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"},
		{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"},
		{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"}
		]; 

	constructor() { }

	ngOnInit() {

	}

}
