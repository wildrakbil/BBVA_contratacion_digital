import { Component, OnInit, Input } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-dropdown',
	templateUrl: './dropdown.component.html',
	styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {


	@Input() id : number=0;
	@Input() dropdownConfig : string="";
	@Input() dropdownLabel : string="";
	@Input() error : string="";
	@Input() options : any =[];
	
	
	constructor() {
	}

	ngOnInit() {
		
	}

	public setAsValue(opcion:string){
		classie.remove(document.getElementById("dropdown_"+this.id), 'input--error');
		classie.add(document.getElementById("dropdown_"+this.id), 'input--bg-white-grey');
		document.getElementById('dropdown_text_'+this.id).innerHTML = opcion; 
	}
	public dropdownComponent() {
		let elmetos = document.getElementsByClassName('form__item');
		for (var i = 0; i < elmetos.length; i++) {
			if(elmetos[i].id!='form_'+this.id){
              classie.remove(elmetos[i], 'dropdown--open');
			}
		}
		classie.toggle(document.getElementById('form_'+this.id), 'dropdown--open');
		classie.add(document.getElementById('label_'+this.id), 'input__label--active');
	}

}
