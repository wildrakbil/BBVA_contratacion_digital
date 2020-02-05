import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';
import { MatDialog, MatDialogConfig} from '@angular/material';
import { PoupCourseComponent } from '../../../components/poup-course/poup-course.component';


@Component({
	selector: 'app-preguntas',
	templateUrl: './preguntas.component.html',
	styleUrls: ['./preguntas.component.scss']
})
export class PreguntasComponent implements OnInit {

	items :any =[
	{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"},
	{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"},
	{"value":"La posición en Ps es la correcta a ocupar por el candadidato?"}
	]; 

	constructor(public dialog:MatDialog) { }

	ngOnInit() {

	}

	onCreate(){
		const dialogConfig = new MatDialogConfig();
		dialogConfig.disableClose = true;
		dialogConfig.autoFocus = true;
		dialogConfig.width = "46%"; 
		this.dialog.open(PoupCourseComponent,dialogConfig);
	}

}
