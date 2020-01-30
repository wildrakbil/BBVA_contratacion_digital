import { Component, OnInit, Input } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

	@Input() options: any =[];
	@Input() id:number=0;
	@Input() error:string="";
	constructor() { }

	ngOnInit() {
		
	}

	public setAsValue(opcion:string){
		classie.remove(document.getElementById("dropdown_"+this.id), 'input--error');
		classie.add(document.getElementById("dropdown_"+this.id), 'input--bg-white-grey');
		document.getElementById('dropdown_text_'+this.id).innerHTML = opcion; 
	}
	public dropdownComponent() {
		classie.toggle(document.getElementById('form_'+this.id), 'dropdown--open');
		classie.add(document.getElementById('label_'+this.id), 'input__label--active');
	}

}
