import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  navigation_items:any =[
  {"navigation__text":"Administrador","routerLink":"/administrador" },
  {"navigation__text":"TAP","routerLink":"/tap" }
  ];

  userName:string='Pepito Rodríguez';

  constructor() { }

  ngOnInit() {
  }

  public menuPrincipal(siguiente: string) {
    classie.toggle(document.getElementById(siguiente), 'megamenu--open');
    classie.remove(document.getElementById(siguiente), 'invisible');
    classie.toggle(document.getElementById('close'), 'display_none');
    classie.toggle(document.getElementById('open'), 'display_none');
  }


}
