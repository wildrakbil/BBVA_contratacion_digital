import { Component, OnInit } from '@angular/core';
import {PaginationInstance} from 'ngx-pagination';
import * as classie from 'classie';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
	selector: 'app-autorizaciones',
	templateUrl: './autorizaciones.component.html',
	styleUrls: ['./autorizaciones.component.scss']
})
export class AutorizacionesComponent implements OnInit {

	public routerLinkPrevious ="/edicion-documentos-parametria";
	public routerLinkNext = "/asignacion-perfiles";
	 

	public items = [
	{"valor":"heckli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes.Checkli makes it easy to get things done, and get things done right. Make personal checklists, workflows and team processes","visible":true},
	{"valor":"Besides fairly commonplace examples like these, however, English has adopted a number of much less familiar Latin phrases and expressions that go criminally underused—20 examples of which are listed here. So next time you spot a misbehaving child, or you want to seize the night rather than the day, you’ll have the perfect phrase at hand","visible":true}
	];



	pageActual: number =1 ;

	constructor(public _router:Router,public _location:Location) { }

  refresh():void{
    this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

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
