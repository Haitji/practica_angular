import { Component } from '@angular/core';
import { Articulo } from '../entity/articulo.model';
import { ActivatedRoute } from '@angular/router';
import { ArticuloService } from '../service/articulo.service';

@Component({
  selector: 'app-list-articulo',
  templateUrl: './list-articulo.component.html',
  styleUrls: ['./list-articulo.component.scss']
})
export class ListArticuloComponent {
  destacado = false;

  lista_articulo: Articulo[]=[];

  constructor(private route: ActivatedRoute,private articuloService: ArticuloService) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      this.obtenerArticulosRest(id.toString());
    });
    console.log(this.lista_articulo);
  }

  private obtenerArticulosRest(id: string){
    this.articuloService.obtenerArticulosRest(id).subscribe(
      (data)=>{
        data.forEach((articulo)=>{
          const articuloIncluir: Articulo = new Articulo(articulo.id,articulo.nombre,articulo.precio_antiguo,articulo.favorito,articulo.imagen,articulo.precio_nuevo);
          this.lista_articulo.push(articuloIncluir);
        })
      }
    );
  }
}
