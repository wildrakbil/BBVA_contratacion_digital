import { Component, OnInit } from '@angular/core';


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

}
