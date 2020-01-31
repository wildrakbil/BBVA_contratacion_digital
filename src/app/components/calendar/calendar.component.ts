import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

	@Input() id : number=0;
	@Input() calendarLabel: string = "";
	@Input() error : string= "";

	valor : string="";

	constructor() { }

	ngOnInit() {
	}

}
