import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as classie from 'classie';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  error_0 : string = "Error!";

  //Configuracion calendar
  calendarLabel_0 : string = "Fecha de Activación:";

  //Configuracion Input
  textfielConfig : string = "input--bg-white-grey";

  inputLabel_0 : string = "Nombre";
  inputLabel_1 : string = "Primer Apellido";
  inputLabel_2 : string = "Correo Electrónico";
  inputLabel_3 : string = "Segundo Nombre";
  inputLabel_4 : string = "Segundo Apellido";
  inputLabel_5 : string = "Número de documento de identidad";

  //Configuracion dropdown
  dropdownConfig : string= "input--required";

  dropdownLabel_0 : String ="Tipo de documento de identidad";
  dropdownLabel_1 : String ="Empresa";
  dropdownLabel_2 : String ="Area";
  dropdownLabel_3 : String ="Tipo de contrato";
  dropdown_0 : any = [{"valor":"CC"},{"valor":"TI"},{"valor":"CE"},{"valor":"Pasaporte"}];
  dropdown_1 : any = [{"valor":"BBVA"},{"valor":"COLPATRIA"},{"valor":"Segiros Bolibar"}];
  dropdown_2 : any = [{"valor":"TAP"},{"valor":"Administrador"}];
  dropdown_3 : any = [{"valor":"Indefinido"},{"valor":"Prestacional"},{"valor":"Termino fijo"}];


 



  registerForm: FormGroup;
  submitted = false;


  constructor(public _router:Router,public _location:Location,private formBuilder: FormBuilder) { 
  }

  ngOnInit() {

  }

  onSubmit() {

  }

  refresh():void{
    this._router.navigateByUrl("/",{ skipLocationChange: true }).then(()=>{
      console.log(decodeURI(this._location.path()));
      this._router.navigate([decodeURI(this._location.path())]);
    });
  }

  validar(){
    // validar textfield obligatgorios
    let textfieldList :any = [0,1,5];
    textfieldList.forEach(function (value){
      if(document.getElementById("white_background_textfield_"+value).getAttribute("ng-reflect-model") == ''){
        classie.remove(document.getElementById("white_background_textfield_"+value), 'ng-pristine', 'ng-valid', 'ng-touched');
        classie.add(document.getElementById("white_background_textfield_"+value), 'input--error');
      }
    });

    // validar dropdown obligatgorios
    let dropdownList :any = [0];
    dropdownList.forEach(function (value){
      if(document.getElementById("dropdown_text_"+value).innerHTML == ''){
        classie.remove(document.getElementById("dropdown_"+value), 'input--bg-white-grey');
        classie.add(document.getElementById("dropdown_"+value), 'input--error');
      }
    });

  }
}
