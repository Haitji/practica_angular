import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IArticulo } from '../entity/articulo.interface';

@Injectable({
  providedIn: 'root'
})
export class ArticuloService {
  constructor(private http: HttpClient) { }

  public obtenerArticulosRest(id: string): Observable<IArticulo[]>{
    const urlEndPoint:string = "http://localhost:3003/api/categorias/"+id;
    return this.http.get<IArticulo[]>(urlEndPoint);
  }
}
