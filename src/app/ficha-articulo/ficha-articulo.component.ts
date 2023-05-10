import { Component } from '@angular/core';
import { Ficha } from './entity/ficha.model';
import { ActivatedRoute } from '@angular/router';
import { FichaService } from './service/ficha.service';

@Component({
  selector: 'app-ficha-articulo',
  templateUrl: './ficha-articulo.component.html',
  styleUrls: ['./ficha-articulo.component.scss']
})
export class FichaArticuloComponent {
  fichaArticulo?: Ficha;
  tallas: string[]=["XXXS","XXS","XS","S","SM","M","L","XL","XXL"];
  tallasDisponibles: boolean[]=[true,true,true,true,true,true,true,true,true];
  
  constructor(private route: ActivatedRoute, private fichaService: FichaService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.obtenerArticulosRest(id.toString());
    });
    console.log(this.fichaArticulo);

  }

  private obtenerArticulosRest(id: string){
    this.fichaService.obtenerArticulosRest(id).subscribe(
      (data)=>{
        this.fichaArticulo=new Ficha(data.id,data.nombre,data.precio,data.tallasDisponibles,data.color,data.imagen);
        this.obtenerTallasDisponibles(data.tallasDisponibles);
      }
    );
  }

  private obtenerTallasDisponibles(tallaAComparar: string[]){
    for(let i=0; i<this.tallas.length; i++){
      const index = tallaAComparar?.indexOf(this.tallas[i]);
      if(index != -1){
        this.tallasDisponibles[i]=true;
      }else{
        this.tallasDisponibles[i]=false;
      }
    }
  }
}
