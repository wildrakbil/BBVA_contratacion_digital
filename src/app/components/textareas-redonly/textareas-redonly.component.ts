import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-textareas-redonly',
	templateUrl: './textareas-redonly.component.html',
	styleUrls: ['./textareas-redonly.component.scss']
})
export class TextareasRedonlyComponent implements OnInit {

	@Input() id:number=0;
	@Input() textareaConfig : string = "";
	@Input() textareaLabel: string = "";
	@Input() error:string="";
	@Input() valor : string="";

	constructor() { }

	ngOnInit() {
	}

}
