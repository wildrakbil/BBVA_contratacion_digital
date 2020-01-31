import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { RouterModule, Routes } from '@angular/router';

import {BotonesComponent} from './botones/botones.component';
import {BusquedaComponent} from './busqueda/busqueda.component';
import {MegamenuComponent} from './megamenu/megamenu.component';
import {ProgressLinearComponent} from './progress-linear/progress-linear.component';
import {SearchDesktopComponent} from './search-desktop/search-desktop.component';
import {TextEditorComponent} from './text-editor/text-editor.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { TextfieldsComponent } from './textfields/textfields.component';
import { TextfieldsRequiredComponent } from './textfields-required/textfields-required.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TextfieldsRedonlyComponent } from './textfields-redonly/textfields-redonly.component';
import { CheckboxesComponent } from './checkboxes/checkboxes.component';
import { TextareasComponent } from './textareas/textareas.component';



@NgModule({
	declarations: [
	BotonesComponent,
	BusquedaComponent,
	MegamenuComponent,
	ProgressLinearComponent,
	SearchDesktopComponent,
	TextEditorComponent,
	DropdownComponent,
	TextfieldsComponent,
	TextfieldsRequiredComponent,
	CalendarComponent,
	TextfieldsRedonlyComponent,
	CheckboxesComponent,
	TextareasComponent
	],
	imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule,
	RouterModule,
	QuillModule.forRoot({
		modules: {
			syntax: false,
			toolbar: [
			['bold', 'italic', 'underline', 'strike'],        // toggled buttons
			['blockquote', 'code-block'],

			[{ 'header': 1 }, { 'header': 2 }],               // custom button values
			[{ 'list': 'ordered'}, { 'list': 'bullet' }],
			[{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
			[{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
			[{ 'direction': 'rtl' }],                         // text direction

			[{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
			[{ 'header': [1, 2, 3, 4, 5, 6, false] }],

			[{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
			[{ 'font': [] }],
			[{ 'align': [] }],

			['clean'],                                         // remove formatting button

			['link', 'image', 'video']                         // link and image, video
			]
		}
	})
	],
	exports:[
	BotonesComponent,
	BusquedaComponent,
	MegamenuComponent,
	ProgressLinearComponent,
	SearchDesktopComponent,
	TextEditorComponent,
	DropdownComponent,
	TextfieldsComponent,
	TextfieldsRequiredComponent,
	CalendarComponent,
	TextfieldsRedonlyComponent,
	CheckboxesComponent,
	TextareasComponent
	]
})
export class ComponentsModule { }
