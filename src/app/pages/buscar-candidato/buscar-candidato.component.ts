import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-buscar-candidato',
  templateUrl: './buscar-candidato.component.html',
  styleUrls: ['./buscar-candidato.component.scss']
})
export class BuscarCandidatoComponent implements OnInit {

  constructor() { 
  	document.getElementById('search__aside').style.visibility = "visible";
  	document.getElementById('serach_principal').style.display = "none";
  }

  ngOnInit() {
  }

}
