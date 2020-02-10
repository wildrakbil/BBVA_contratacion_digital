import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-home-tap',
  templateUrl: './home-tap.component.html',
  styleUrls: ['./home-tap.component.scss']
})
export class HomeTapComponent implements OnInit {

 	constructor() { 
		document.getElementById('megamenu__aside').style.visibility = "invisible";
		document.getElementById('search__aside').style.visibility = "invisible";
		classie.remove(document.getElementById('search__aside'), 'search--open');
		classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
	}


  ngOnInit() {
  }

}
