import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-pelicula-list',
  templateUrl: './pelicula-list.component.html',
  styleUrls: ['./pelicula-list.component.scss'],
})
export class PeliculaListComponent implements OnInit, OnChanges {

  @Input() query?: string;

  private peliculas: Pelicula[] = [];

  constructor(private readonly service: PeliculasService) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.actualizarListaPeliculas(this.query);
  }

  actualizarListaPeliculas(busqueda: string): void {
    if (busqueda === undefined) { return; }
    this.service.getPeliculas(busqueda)
      .subscribe(res => {
        if (res["Response"] === "False" && !this.query) { this.peliculas = []; return; }
        const Peliculas = res["Search"];
        this.peliculas = [...Peliculas];
      })
  }



  ngOnInit() {
  }

}
