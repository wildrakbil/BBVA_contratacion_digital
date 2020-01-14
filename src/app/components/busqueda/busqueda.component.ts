import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public my_profile(){
  	document.getElementById('id_card').style.display = "none";
  	document.getElementById('my_profile').style.display = "flex";
  }

  public id_card(){
  	document.getElementById('my_profile').style.display = "none";
  	document.getElementById('id_card').style.display = "flex";
  } 

  public closeSearch(siguiente: string){
     classie.toggle(document.getElementById(siguiente), 'search--open');
     document.getElementById(siguiente).style.visibility = "visible";

  }
    

}
