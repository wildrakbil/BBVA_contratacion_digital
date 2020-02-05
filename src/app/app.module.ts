import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule }from './pages/pages.module';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';

@NgModule({
	declarations: [
	AppComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	ComponentsModule,
	MaterialModule,
	PagesModule,
	BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
