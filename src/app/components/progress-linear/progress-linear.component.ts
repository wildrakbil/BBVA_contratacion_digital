import { Component, OnInit, Input } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-progress-linear',
	templateUrl: './progress-linear.component.html',
	styleUrls: ['./progress-linear.component.scss']
})
export class ProgressLinearComponent implements OnInit {

	@Input() avance : number = 0;
	@Input() i : number = 0;

	constructor() { 
	}
	ngOnInit() {
		document.getElementById('progress').id='progress_'+this.i;
		if(this.avance==0){
			classie.add(document.getElementById('progress'+this.i), 'paralelogramo-rojo');
		}
		if(this.avance==50){
			classie.add(document.getElementById('progress'+this.i), 'paralelogramo-amarillo');
		}
		if(this.avance==100){
			classie.add(document.getElementById('progress'+this.i), 'paralelogramo-verde');
		}
	}

}
