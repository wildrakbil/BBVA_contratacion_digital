import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

   public searchPrincipal(siguiente: string) {
  	classie.toggle(document.getElementById(siguiente), 'search--open');
  	document.getElementById(siguiente).style.visibility = "visible";
  	classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
	  classie.toggle(document.getElementById('megamenu__aside'), 'invisible');
    document.getElementById('serach_principal').style.display = "block";
    document.getElementById('serach_secundario').style.display = "none";
  }
      
   public menuPrincipal(siguiente: string) {
	  classie.toggle(document.getElementById(siguiente), 'megamenu--open');
	  classie.remove(document.getElementById(siguiente), 'invisible');
    classie.remove(document.getElementById('search__aside'), 'search--open');
	  document.getElementById('search__aside').style.visibility = "visible";
   }

   public hola(){
     
   }

}
