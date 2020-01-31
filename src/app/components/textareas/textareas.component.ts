import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textareas',
  templateUrl: './textareas.component.html',
  styleUrls: ['./textareas.component.scss']
})
export class TextareasComponent implements OnInit {

	@Input() id:number=0;
	@Input() textareaConfig : string = "";
	@Input() textareaLabel: string = "";
	@Input() error:string="";

  valor : string="";

  constructor() { }

  ngOnInit() {
  }

  clearValue(){
    this.valor="";
  }

}
