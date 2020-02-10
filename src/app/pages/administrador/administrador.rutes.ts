import {RouterModule, Routes} from "@angular/router";
import { AdministradorComponent } from './administrador.component';

import { HomeAdministradorComponent } from './shared/home-administrador/home-administrador.component';
import { AsignacionPerfilesComponent } from './asignacion-perfiles/asignacion-perfiles.component';
import { AutorizacionesComponent } from './autorizaciones/autorizaciones.component';
import { BuscarCandidatoComponent } from './buscar-candidato/buscar-candidato.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { EdicionDocumentosElectronicosComponent } from './edicion-documentos-electronicos/edicion-documentos-electronicos.component';
import { EdicionDocumentosParametriaComponent } from './edicion-documentos-parametria/edicion-documentos-parametria.component';
import { EditarOfertaComponent } from './editar-oferta/editar-oferta.component';
import { EditarPreOfertaComponent } from './editar-pre-oferta/editar-pre-oferta.component';
import { PreguntasDeControlComponent } from './preguntas-de-control/preguntas-de-control.component';


const administradorRoutes: Routes = [
{
	path: 'administrador', component: AdministradorComponent,
	children: [
	{path: 'home', component: HomeAdministradorComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'edicion-documentos-parametria', component: EdicionDocumentosParametriaComponent},
	{path: 'autorizaciones', component: AutorizacionesComponent},
	{path: 'asignacion-perfiles',component:AsignacionPerfilesComponent},
	{path: 'edicion-documentos-electronicos', component: EdicionDocumentosElectronicosComponent},
	{path: 'editar-pre-oferta', component: EditarPreOfertaComponent},
	{path: 'editar-oferta', component: EditarOfertaComponent},
	{path: 'preguntas-de-control', component: PreguntasDeControlComponent},
	{path: 'candidatos', component: CandidatosComponent},

	{path: 'buscar-candidato', component: BuscarCandidatoComponent}
	]
}
];
export const ADMINISTRADOR_ROUTES = RouterModule.forChild(administradorRoutes);