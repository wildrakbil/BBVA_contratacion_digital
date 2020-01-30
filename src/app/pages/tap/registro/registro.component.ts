import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {


  dropdown_0 : any = [{"valor":"Administrador"},{"valor":"Usuario"}];
  error_0 : string = "ERROR MENSSAGE";


  constructor(public _router:Router,public _location:Location) { }

  ngOnInit() {

  }

  refresh():void{
    this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  validar(){
    if(document.getElementById("dropdown_text_0").innerHTML == ''){
      classie.remove(document.getElementById("dropdown_0"), 'input--bg-white-grey');
      classie.add(document.getElementById("dropdown_0"), 'input--error');
    }
  }

}
