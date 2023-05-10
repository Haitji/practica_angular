import { Component } from '@angular/core';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.scss']
})
export class BannersComponent {
  elementos: string[]=[];

  constructor(private service: HomeService) {

  }

  ngOnInit() {
    this.obtenerElementos();
  }


  
  private obtenerElementos(){
    this.service.bannersRest().subscribe(
      (data)=>{
        this.elementos = data;
      }
    );
  }
}
