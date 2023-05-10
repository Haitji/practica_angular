import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { HttpClientModule } from '@angular/common/http';
import { BannersComponent } from './banners/banners.component';
import { CategoriasComponent } from './categorias/categorias.component';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    BannersComponent,
    CategoriasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ]
})
export class HomeModule { }
