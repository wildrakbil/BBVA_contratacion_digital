import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TapModule}from './tap/tap.module'; 
import { ComponentsModule } from '../components/components.module';

import { TapComponent } from './tap/tap.component';
import { PagesComponent } from './pages.component';

import { TAP_ROUTES } from "./tap/tap.rutes";

@NgModule({
  declarations: [TapComponent, PagesComponent],
  imports: [
    CommonModule,
    TapModule,
    ComponentsModule,
    TAP_ROUTES
    
  ]
})
export class PagesModule { }
