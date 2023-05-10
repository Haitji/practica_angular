import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  destacado = false;

  cambiarEstilo() {
    if(!this.destacado){
      this.destacado = true;
    }else{
      this.destacado = false;
    }
  }

}
