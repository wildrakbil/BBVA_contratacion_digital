import { Component, OnInit,Input } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-megamenu',
  templateUrl: './megamenu.component.html',
  styleUrls: ['./megamenu.component.scss']
})
export class MegamenuComponent implements OnInit {

  @Input() navigation_items: any =[];
  
  constructor() { }

  ngOnInit() {
  }

  public cleanMegaMenu(){
  	classie.remove(document.getElementById('megamenu__aside'), 'megamenu--open');
	  classie.toggle(document.getElementById('megamenu__aside'), 'invisible');
    classie.toggle(document.getElementById('close'), 'display_none');
    classie.toggle(document.getElementById('open'), 'display_none');
  }

}
