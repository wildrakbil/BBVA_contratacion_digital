import {RouterModule, Routes} from "@angular/router";


import {TapComponent} from "./tap.component";
import {HomeTapComponent} from "./shared/home-tap/home-tap.component";
import {RegistroComponent} from "./registro/registro.component";
import {CandidatosComponent} from "./candidatos/candidatos.component";
import {BuscarCandidatoComponent} from "./buscar-candidato/buscar-candidato.component";
import {InformacionComponent} from "./informacion/informacion.component";
import {PreOfertaComponent} from "./pre-oferta/pre-oferta.component";
import {ContratoComponent} from "./contrato/contrato.component";
import {PreguntasComponent} from "./preguntas/preguntas.component";



const tapRoutes: Routes = [
{
	path: 'tap', component: TapComponent,
	children: [
	{path: 'home', component: HomeTapComponent},
	{path: '', redirectTo: 'home', pathMatch: 'full'},
	{path: 'registro', component: RegistroComponent},
	{path: 'candidatos', component: CandidatosComponent},
	{path: 'informacion', component: InformacionComponent},
	{path: 'pre-oferta', component: PreOfertaComponent },
	{path: 'contrato', component: ContratoComponent},
	{path: 'preguntas', component: PreguntasComponent},
	{path: 'buscar-candidato', component: BuscarCandidatoComponent}
	]
}
];
export const TAP_ROUTES = RouterModule.forChild(tapRoutes);