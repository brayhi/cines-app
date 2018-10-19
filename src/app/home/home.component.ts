import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas:any = [];

  constructor(public route:Router, public pelisServices: PeliculaService) {
    
   }

  ngOnInit() {
    this.getPelis();

  }

  prueba(peli,i){
    if(peli == this.peliculas[0]){
      return true
    }
    return false


  }
  getPelis(){
    this.pelisServices.getPeliculas().subscribe((data:any) => {this.peliculas = data.list});

  }
  chapuza(i){
    console.log(i)
  }
  //Añadir id en la funcion del html

  verSesiones(nombre){
    console.log(nombre);
    this.route.navigate(['/cines', nombre])

  }

  verInfo(){
    //this.route.navigate(['/peliculas', id])
  }

  // //getPelis(){
  //   this.http.get('ruta', {headers})
  // }

  

}
