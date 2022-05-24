import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { BuscadorComponent } from './buscador/buscador.component';
import { PeliculaListComponent } from './pelicula-list/pelicula-list.component';
import { PeliculaComponent } from './pelicula-list/pelicula/pelicula.component';
import { DetallesComponent } from '../detalles/detalles.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, BuscadorComponent, PeliculaListComponent, PeliculaComponent, DetallesComponent]
})
export class HomePageModule {}
