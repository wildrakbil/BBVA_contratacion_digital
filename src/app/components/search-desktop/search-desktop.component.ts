import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
  selector: 'app-search-desktop',
  templateUrl: './search-desktop.component.html',
  styleUrls: ['./search-desktop.component.scss']
})
export class SearchDesktopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public searchPrincipalOpcion(siguiente: string){
      document.getElementById('serach_principal').style.display = "none";
      document.getElementById('serach_secundario').style.display = "block";
      console.log(siguiente);
      document.getElementById(siguiente).style.display = "none";
      if(siguiente == 'my_profile'){
         document.getElementById('id_card').style.display = "flex";
      }
       if(siguiente == 'id_card'){
         document.getElementById('my_profile').style.display = "flex";
      }
  }

  public closeSearch(siguiente: string){
      classie.toggle(document.getElementById(siguiente), 'search--open');
     document.getElementById(siguiente).style.visibility = "visible";

  }
      

}
