import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-home-administrador',
  templateUrl: './home-administrador.component.html',
  styleUrls: ['./home-administrador.component.scss']
})
export class HomeAdministradorComponent implements OnInit {

   constructor() { 
  	document.getElementById('megamenu__aside').style.visibility = "invisible";
  	document.getElementById('search__aside').style.visibility = "invisible";
  	classie.remove(document.getElementById('search__aside'), 'search--open');
  	classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
  }
  ngOnInit() {
  }

}
