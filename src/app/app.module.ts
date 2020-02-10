import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './components/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagesModule }from './pages/pages.module';


import { PAGES_ROUTES }  from './pages/pages.rutes';

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
	BrowserAnimationsModule,
	PAGES_ROUTES
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
