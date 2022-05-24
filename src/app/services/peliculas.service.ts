import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PeliculaDetail, Result } from '../interfaces/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private readonly http:HttpClient) {}

  getPeliculas(query:string): Observable<Result[]> {
    const API = `https://www.omdbapi.com/?s=${query}&apikey=${environment.key}`;
    return this.http.get<Result[]>(API);
  }

  getPeliculaDetails(imdbID:string):Observable<PeliculaDetail> {
    const API = `https://www.omdbapi.com/?i=${imdbID}&type=movie&apikey=${environment.key}`;
    return this.http.get<PeliculaDetail>(API);
  }
}
