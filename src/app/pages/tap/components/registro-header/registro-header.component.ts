import { Component, OnInit, Input } from '@angular/core';
import * as classie from 'classie';


@Component({
  selector: 'app-registro-header',
  templateUrl: './registro-header.component.html',
  styleUrls: ['./registro-header.component.scss']
})
export class RegistroHeaderComponent implements OnInit {

  @Input() origen:number = 0;

  constructor() { }

  ngOnInit() {
    for (var i = 0; i <= 4; i++) {
      classie.remove(document.getElementById('body-selected-'+i), 'body-selected');
      classie.add(document.getElementById('body-selected-'+i), 'body-copy');
    }
    classie.add(document.getElementById('body-selected-'+this.origen), 'body-selected');
  }
}
