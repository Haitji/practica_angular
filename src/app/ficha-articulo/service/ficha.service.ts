import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IFicha } from '../entity/ficha.interface';

@Injectable({
  providedIn: 'root'
})
export class FichaService {
  constructor(private http: HttpClient) { }

  public obtenerArticulosRest(id: string): Observable<IFicha>{
    const urlEndPoint:string = "http://localhost:3003/api/ficha-productos/"+id;
    return this.http.get<IFicha>(urlEndPoint);
  }
}
