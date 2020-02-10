import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

import { PoupCourseComponent } from '../../components/poup-course/poup-course.component';
import { HomeAdministradorComponent } from './shared/home-administrador/home-administrador.component';
import { HeaderAdministradorComponent } from './shared/header-administrador/header-administrador.component';

import { AsignacionPerfilesComponent } from './asignacion-perfiles/asignacion-perfiles.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { BuscarCandidatoComponent } from './buscar-candidato/buscar-candidato.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EdicionDocumentosElectronicosComponent } from './edicion-documentos-electronicos/edicion-documentos-electronicos.component';
import { EdicionDocumentosParametriaComponent } from './edicion-documentos-parametria/edicion-documentos-parametria.component';
import { EditarOfertaComponent } from './editar-oferta/editar-oferta.component';
import { EditarPreOfertaComponent } from './editar-pre-oferta/editar-pre-oferta.component';
import { PreguntasDeControlComponent } from './preguntas-de-control/preguntas-de-control.component';


@NgModule({
	declarations: [
	HomeAdministradorComponent,
	HeaderAdministradorComponent,
	AsignacionPerfilesComponent,
	AutorizacionesComponent,
	BuscarCandidatoComponent,
	CandidatosComponent,
	EdicionDocumentosElectronicosComponent,
	EdicionDocumentosParametriaComponent,
	EditarOfertaComponent,
	EditarPreOfertaComponent,
	PreguntasDeControlComponent
	],
	imports: [
	CommonModule,
	ComponentsModule,
	NgxPaginationModule,
	RouterModule
	],
	exports:[
	HeaderAdministradorComponent
	],
	entryComponents: [PoupCourseComponent]
})
export class AdministradorModule { }
