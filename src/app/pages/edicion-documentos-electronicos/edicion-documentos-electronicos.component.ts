import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import {PaginationInstance} from 'ngx-pagination';

@Component({
	selector: 'app-edicion-documentos-electronicos',
	templateUrl: './edicion-documentos-electronicos.component.html',
	styleUrls: ['./edicion-documentos-electronicos.component.scss']
})
export class EdicionDocumentosElectronicosComponent implements OnInit {


	public routerLinkPrevious ="/asignacion-perfiles";
	public routerLinkNext = "/editar-pre-oferta";
	exit() {
     	window.location.reload();
    }



	public items = [
	{"documento":"Tipo  de contrato 1" , "valor":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum" , "visible":true},
	{"documento":"Tipo  de contrato 2" , "valor":"ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur" , "visible":true},
	{"documento":"Tipo  de contrato 3" , "valor":"liquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure r" , "visible":true},
	{"documento":"Tipo  de contrato 4" , "valor":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate" , "visible":true},
	{"documento":"Tipo  de contrato 5" , "valor":"optio cumque nihil impedit quo minus id quod maxime placeat facere possimus," , "visible":true},
	{"documento":"Tipo  de contrato 6" , "valor":"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." , "visible":true},
	{"documento":"Tipo  de contrato 7" , "valor":"numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate" , "visible":true},
	{"documento":"Tipo  de contrato 8" , "valor":"fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut" , "visible":true}
	];


	constructor() { }

	ngOnInit() {
	}


	public config: PaginationInstance = {
		id: 'custom',
		itemsPerPage: 4,
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
