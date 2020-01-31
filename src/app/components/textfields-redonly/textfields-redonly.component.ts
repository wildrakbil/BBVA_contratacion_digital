import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textfields-redonly',
  templateUrl: './textfields-redonly.component.html',
  styleUrls: ['./textfields-redonly.component.scss']
})
export class TextfieldsRedonlyComponent implements OnInit {

 	@Input() id : number = 0;
	@Input() textfielConfig : string = "";
	@Input() inputLabel : string= "";
	@Input() error: string ="";
	
	valor:string="";

	constructor() { 
	}

	ngOnInit() {

	}

}
