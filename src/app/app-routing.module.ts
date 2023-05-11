import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloComponent } from './articulo/articulo.component';
import { FichaArticuloComponent } from './ficha-articulo/ficha-articulo.component';
import { NosotrosComponent } from './nosotros/nosotros.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'articulos', component: ArticuloComponent},
  { path: 'ficha', component: FichaArticuloComponent},
  { path: 'nosotros', component:NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
