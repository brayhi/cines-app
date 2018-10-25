import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  peliculas:any =[];

  constructor(public route:Router, public pelisServices: PeliculaService) {
}

  ngOnInit() {
    this.getPelis();


  }
  // setPelicula(index){
  //   this.id
  // }

  prueba(peli){
    console.log(peli.titulo);
    if(peli == this.peliculas[0]){
      
      return true
    }
    return false


  }
  getPelis(){
    this.pelisServices.getPeliculas().subscribe((data:any) => {console.log(typeof(data.list));console.log(data.list);
    //this.peliculas = data.list
    for(var dat in data.list){
      this.peliculas.push(data.list[dat]);
    }
  });
    

  }
  chapuza(i){
    console.log(i)
  }
  //Añadir id en la funcion del html

  verSesiones(nombre){
    console.log(nombre);
    this.route.navigate(['/cines', nombre])

  }

  verInfo(id:string){
    console.log(id)
    this.route.navigate(['/peliculas', id])
  }

  // //getPelis(){
  //   this.http.get('ruta', {headers})
  // }

  

}
