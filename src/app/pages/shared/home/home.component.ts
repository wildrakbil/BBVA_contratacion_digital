import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	constructor() { 
		document.getElementById('megamenu__aside').style.visibility = "invisible";
		classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
	}

	ngOnInit() {
	}
}
