import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/interfaces/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss'],
})
export class PeliculaComponent implements OnInit {

  @Input() pelicula:Pelicula;

  constructor(private readonly router: Router) { }

  ngOnInit() {}

  goToDetails(imdbID:string):void {
    this.router.navigate(['details'], {queryParams: {id: imdbID}})
  }

}
