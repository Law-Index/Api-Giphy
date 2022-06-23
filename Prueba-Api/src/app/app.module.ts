import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { GifsComponent } from './gifs/gifs.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BusquedaComponent,
    GifsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
