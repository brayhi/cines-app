import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  URL = "http://localhost:3000/peliculas/";

  constructor(private http:HttpClient) {
    console.log('service')

   }

  getPeliculas(){
    return this.http.get(this.URL);
  }
  getPelicula(id){
    return this.http.get(this.URL+id)
  }
}
