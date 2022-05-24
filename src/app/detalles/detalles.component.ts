import { Component, OnInit } from '@angular/core';
import { PeliculaDetail } from '../interfaces/pelicula';
import { ActivatedRoute, Params } from '@angular/router';
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss'],
})
export class DetallesComponent implements OnInit {

  imdbID!: string;

  pelicula?: PeliculaDetail = {
    Title: '',
    Year: '',
    Rated: '',
    Released: '',
    Runtime: '',
    Genre: '',
    Director: '',
    Writer: '',
    Actors: '',
    Plot: '',
    Language: '',
    Country: '',
    Awards: '',
    Poster: '',
    Ratings: [],
    Metascore: '',
    imdbRating: '',
    imdbVotes: '',
    imdbID: '',
    Type: '',
    DVD: '',
    BoxOffice: '',
    Production: '',
    Website: '',
    Response: ''
  };

  constructor(private readonly service: PeliculasService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( params => {
      const id = params.get('imdbID');
      this.imdbID = id;
    })

    this.service.getPeliculaDetails(this.imdbID).subscribe(res => {
      this.pelicula = res;
    });
  }

}
