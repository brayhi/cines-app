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

  getPelis(){
    this.pelisServices.getPeliculas().subscribe((data:any) => {console.log(data.list); this.peliculas = data.list});

  }
  chapuza(i){
    console.log(i)
  }
  //Añadir id en la funcion del html

  verSesiones(nombre){
    this.route.navigate(['/cines', nombre]);
  }

  verInfo(){
    //this.route.navigate(['/peliculas', id])
  }

  // //getPelis(){
  //   this.http.get('ruta', {headers})
  // }

  

}
