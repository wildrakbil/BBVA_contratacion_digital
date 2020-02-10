import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ComponentsModule } from '../components/components.module';
import { TapModule }from './tap/tap.module'; 
import { AdministradorModule } from './administrador/administrador.module';

import { TapComponent } from './tap/tap.component';
import { PagesComponent } from './pages.component';
import { HomeComponent } from './shared/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { AdministradorComponent } from './administrador/administrador.component';

import { TAP_ROUTES } from "./tap/tap.rutes";
import { ADMINISTRADOR_ROUTES } from './administrador/administrador.rutes';



@NgModule({
	declarations: [
	TapComponent, 
	PagesComponent, 
	HomeComponent, 
	HeaderComponent, 
	AdministradorComponent
	],
	imports: [
	CommonModule,
	TapModule,
	AdministradorModule ,
	ComponentsModule,
	TAP_ROUTES,
	ADMINISTRADOR_ROUTES
	]
})
export class PagesModule { }
