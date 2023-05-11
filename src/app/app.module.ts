import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticuloComponent } from './articulo/articulo.component';
import { FichaArticuloComponent } from './ficha-articulo/ficha-articulo.component';
import { ConversorPrecioPipe } from './pipes/conversor-precio.pipe';
import { CardArticuloComponent } from './articulo/card-articulo/card-articulo.component';
import { ListArticuloComponent } from './articulo/list-articulo/list-articulo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ArticuloComponent,
    FichaArticuloComponent,
    ConversorPrecioPipe,
    CardArticuloComponent,
    ListArticuloComponent,
    NosotrosComponent
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
