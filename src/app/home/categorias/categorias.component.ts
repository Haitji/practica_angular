import { Component } from '@angular/core';
import { Categoria } from '../entity/categoria.model';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent {
  lista_categoria: Categoria[]=[];

  constructor(
    private categoriaService: HomeService) {

  }
  ngOnInit(): void {
    this.obtenerArticulosRest();
  }
  private obtenerArticulosRest(){
    this.categoriaService.categoriasRest().subscribe(
      (data)=>{
        data.forEach((articulo)=>{
          const articuloIncluir: Categoria = new Categoria(articulo.id,articulo.imagen,articulo.nombre);
          this.lista_categoria.push(articuloIncluir);
        })
      }
    );
  }
}
