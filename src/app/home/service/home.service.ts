import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carousel } from '../entity/carousel.model';
import { ICategoria } from '../entity/categoria.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) { }

  public carouselRest(): Observable<Carousel[]>{
    const urlEndPoint:string = "http://localhost:3003/api/carousel";
    return this.http.get<Carousel[]>(urlEndPoint);
  }

  public bannersRest(): Observable<string[]>{
    const urlEndPoint:string = "http://localhost:3003/api/banners";
    return this.http.get<string[]>(urlEndPoint);
  }
  public categoriasRest(): Observable<ICategoria[]>{
    const urlEndPoint:string = "http://localhost:3003/api/categorias";
    return this.http.get<ICategoria[]>(urlEndPoint);
  }
}
