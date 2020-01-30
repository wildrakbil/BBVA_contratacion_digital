import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './shared/home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { BuscarCandidatoComponent } from './buscar-candidato/buscar-candidato.component';
import { RegistroHeaderComponent } from './components/registro-header/registro-header.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PreOfertaComponent } from './pre-oferta/pre-oferta.component';
import { ContratoComponent } from './contrato/contrato.component';
import { PreguntasComponent } from './preguntas/preguntas.component';

@NgModule({
  declarations: [
  HeaderComponent,
  HomeComponent,
  RegistroComponent,
  CandidatosComponent,
  BuscarCandidatoComponent,
  RegistroHeaderComponent,
  InformacionComponent,
  PreOfertaComponent,
  ContratoComponent,
  PreguntasComponent
  ],
  imports: [
  CommonModule,
  ComponentsModule,
  NgxPaginationModule,
  RouterModule
  ],
  exports:[
  HeaderComponent
  ]
})
export class TapModule { }
