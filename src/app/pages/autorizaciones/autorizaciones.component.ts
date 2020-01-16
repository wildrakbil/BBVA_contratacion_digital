import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import * as classie from 'classie';

@Component({
	selector: 'app-autorizaciones',
	templateUrl: './autorizaciones.component.html',
	styleUrls: ['./autorizaciones.component.scss']
})
export class AutorizacionesComponent implements OnInit {

	public items = [
	{"valor":"heckli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes.Checkli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes","visible":true},
	{"valor":"heckli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes.Checkli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes","visible":true}
	];



	pageActual: number =1 ;
	constructor() { }

	ngOnInit() {
	}

	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: 2,
		currentPage: 1
	};

	public edit_aut(index:number){
		for (var i = 1 ; i <= 5; i++) {
			classie.toggle(document.getElementById('div_'+i+'_'+index), 'display_none');
			classie.toggle(document.getElementById('text_'+i+'_'+index), 'display_none');
		}

	}

	public new_user_open(){
		classie.toggle( document.getElementById('new_user'),'display_none');
	}


}
