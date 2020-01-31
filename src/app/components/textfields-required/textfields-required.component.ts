import { Component, OnInit, Input} from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-textfields-required',
	templateUrl: './textfields-required.component.html',
	styleUrls: ['./textfields-required.component.scss']
})
export class TextfieldsRequiredComponent implements OnInit {

	@Input() id:number=0;
	@Input() textfielConfig : string = "";
	@Input() inputLabel : string= "";
	@Input() error:string="";
	
	valor:string="";

	constructor() { 
	}

	ngOnInit() {

	}

	clearValue(){
		this.valor="";
	}
	clearError(){
		classie.remove(document.getElementById('white_background_textfield_'+this.id), 'input--error');
	}

}
