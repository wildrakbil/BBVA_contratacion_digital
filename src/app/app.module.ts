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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PagesComponent,
    BuscarCandidatoComponent,
    BusquedaComponent,
    SearchDesktopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PAGES_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
