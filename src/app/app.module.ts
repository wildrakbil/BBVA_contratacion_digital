import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {PAGES_ROUTES} from "./pages/pages.rutes";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { BuscarCandidatoComponent } from './pages/buscar-candidato/buscar-candidato.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { SearchDesktopComponent } from './components/search-desktop/search-desktop.component';
import { AsignacionPerfilesComponent } from './pages/asignacion-perfiles/asignacion-perfiles.component';
import { MegamenuComponent } from './components/megamenu/megamenu.component';
import { AutorizacionesComponent } from './pages/autorizaciones/autorizaciones.component';
import { EdicionDocumentosParametriaComponent } from './pages/edicion-documentos-parametria/edicion-documentos-parametria.component';
import { EdicionDocumentosElectronicosComponent } from './pages/edicion-documentos-electronicos/edicion-documentos-electronicos.component';
import { EditarOfertaComponent } from './pages/editar-oferta/editar-oferta.component';
import { EditarPreOfertaComponent } from './pages/editar-pre-oferta/editar-pre-oferta.component';
import { CandidatosComponent } from './pages/candidatos/candidatos.component';
import { PreguntasDeControlComponent } from './pages/preguntas-de-control/preguntas-de-control.component';

import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagesComponent,
    BuscarCandidatoComponent,
    BusquedaComponent,
    SearchDesktopComponent,
    AsignacionPerfilesComponent,
    MegamenuComponent,
    AutorizacionesComponent,
    EdicionDocumentosParametriaComponent,
    EdicionDocumentosElectronicosComponent,
    EditarOfertaComponent,
    EditarPreOfertaComponent,
    CandidatosComponent,
    PreguntasDeControlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PAGES_ROUTES,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
