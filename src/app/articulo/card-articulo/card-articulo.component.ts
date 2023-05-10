import { Component, Input } from '@angular/core';
import { Articulo } from '../entity/articulo.model';

@Component({
  selector: 'app-card-articulo',
  templateUrl: './card-articulo.component.html',
  styleUrls: ['./card-articulo.component.scss']
})
export class CardArticuloComponent {

  @Input() article?: Articulo;
  descuento: boolean =false;
  
  constructor() { }

  ngOnInit(): void {
    if(this.article&&this.article.getPrecio()>this.article.getPrecioDescuento()){
      this.descuento=true;
    }else{
      this.descuento=false;
    }
  }
  

}
