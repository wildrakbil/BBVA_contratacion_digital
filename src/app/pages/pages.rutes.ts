import {RouterModule, Routes} from "@angular/router";
import {PagesComponent} from "./pages.component";
import {HomeComponent} from "./home/home.component";
import {BuscarCandidatoComponent} from "./buscar-candidato/buscar-candidato.component";


const pagesRoutes: Routes = [
    {
      path: '', component: PagesComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'buscar-candidato', component: BuscarCandidatoComponent}
      ]
    }
  ];
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);