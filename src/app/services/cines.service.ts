import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CinesService {
  /*cines: any = [{
    nombre: "Yelmo Cines Ideal",
    latitud: 40.413896,
    longitud: -3.703790,
    direccion: "Calle del Dr Cortezo, 6, 28012 Madrid",
    sesiones: [
      {pelicula: "Origen", sala: "Sala 2", hora: "19:00"},
      {pelicula: "Venom", sala: "Sala 1", hora: "16:00"},
      {pelicula: "La Sombra de la Ley", sala: "Sala 9", hora: "20:30"},
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 6", hora: "17:00"},
    ],
    horario: "De 16:00 a 24:00",
  },{
    nombre: "Cinesa Proyecciones",
    latitud: 40.433049,
    longitud: -3.704128,
    direccion: "Calle de Fuencarral, 136, 28001 Madrid",
    sesiones: [
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 2", hora: "19:00"},
      {pelicula: "Venom", sala: "Sala 1", hora: "16:00"},
      {pelicula: "Mulholland Drive", sala: "Sala 9", hora: "20:30"},
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 6", hora: "17:00"},
    ],
    horario: "De 17:00 a 1:00",
  },{
    nombre: "Renoir Plaza de España",
    latitud: 40.424701,
    longitud:  -3.713445,
    direccion: "Calle de Martín de los Heros, 12, 28008 Madrid",
    sesiones: [
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 1", hora: "18:00"},
      {pelicula: "Venom", sala: "Sala 2", hora: "16:00"},
      {pelicula: "La Sombra de la Ley", sala: "Sala 3", hora: "20:30"},
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 6", hora: "17:00"},
    ],
    horario: "De 12:00 a 24:00",
  },{
    nombre: "Cines Callao",
    latitud: 40.420152,
    longitud: -3.705964,
    direccion: "Plaza del Callao, 3, 28013 Madrid",
    sesiones: [
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 1", hora: "19:00"},
      {pelicula: "Venom", sala: "Sala 2", hora: "16:00"},
      {pelicula: "La Sombra de la Ley", sala: "Sala 3", hora: "16:30"},
      {pelicula: "First Man - El Primer Hombre", sala: "Sala 6", hora: "17:00"},
    ],
    horario: "De 14:00 a 1:00",
  }]*/
  URL_WS: string = "http://localhost:3000/cine/";
  cabecera = new Headers({"Content-Type":"application/json"});
  
  constructor(private http: Http) { }

  public getCines(){
    let URL = this.URL_WS;
    return this.http.get(URL, {headers: this.cabecera});
  }

  public getCinesPeli(nombrePeli: string){
    let misCines: any[] = [];
    this.getCines().subscribe((cines: any) => {
      cines = JSON.parse(cines._body).cines;
      cines = Object.keys(cines).map(function(key){
        console.log(cines[key]);
        return cines[key];     
      });
      cines.forEach(cine => {
        cine.sesiones.forEach(sesion => {
          if (sesion.pelicula == nombrePeli){
            misCines.push(cine);
          }
        });
      });
    });
  return misCines;
  }
}
