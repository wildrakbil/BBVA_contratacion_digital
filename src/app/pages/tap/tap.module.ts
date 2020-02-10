import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';


import { RegistroComponent } from './registro/registro.component';
import { CandidatosComponent } from './candidatos/candidatos.component';
import { BuscarCandidatoComponent } from './buscar-candidato/buscar-candidato.component';
import { RegistroHeaderComponent } from './components/registro-header/registro-header.component';
import { InformacionComponent } from './informacion/informacion.component';
import { PreOfertaComponent } from './pre-oferta/pre-oferta.component';
import { ContratoComponent } from './contrato/contrato.component';
import { PreguntasComponent } from './preguntas/preguntas.component';
import { PoupCourseComponent } from '../../components/poup-course/poup-course.component';
import { HeaderTapComponent } from './shared/header-tap/header-tap.component';
import { HomeTapComponent } from './shared/home-tap/home-tap.component';

@NgModule({
  declarations: [
  RegistroComponent,
  CandidatosComponent,
  BuscarCandidatoComponent,
  RegistroHeaderComponent,
  InformacionComponent,
  PreOfertaComponent,
  ContratoComponent,
  PreguntasComponent,
  HeaderTapComponent,
  HomeTapComponent
  ],
  imports: [
  CommonModule,
  ComponentsModule,
  NgxPaginationModule,
  RouterModule
  ],
  exports:[
  HeaderTapComponent
  ],
  entryComponents: [PoupCourseComponent]
})
export class TapModule { }
