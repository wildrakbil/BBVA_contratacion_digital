import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { PagesModule }from './pages/pages.module';
import { ComponentsModule } from './components/components.module';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
	declarations: [
	AppComponent
	],
	imports: [
	BrowserModule,
	AppRoutingModule,
	ComponentsModule,
	PagesModule,
	BrowserAnimationsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
