import { Component } from '@angular/core';
import { Carousel } from '../entity/carousel.model';
import { HomeService } from '../service/home.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  constructor(private service: HomeService){

  }

  currentSlide = 0;

  slides:Carousel[]=[];


  prevSlide() {
    if (this.currentSlide === 0) {
      this.currentSlide = this.slides.length - 1;
    } else {
      this.currentSlide--;
    }
  }

  nextSlide() {
    if (this.currentSlide === this.slides.length - 1) {
      this.currentSlide = 0;
    } else {
      this.currentSlide++;
    }
  }
  ngOnInit() {
    setInterval(() => {
      this.nextSlide2();
    }, 5000);
    this.obtenerImagen();
  }
  nextSlide2() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  private obtenerImagen(){
    this.service.carouselRest().subscribe(
      (data)=>{
        data.forEach((articulo)=>{
          const carouselImag: Carousel = new Carousel(articulo.imageUrl,articulo.caption);
          this.slides.push(carouselImag);
        })
      }
    )
  }
}
