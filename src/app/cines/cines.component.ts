import { Component, OnInit } from '@angular/core';
import { CinesService } from '../services/cines.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cines',
  templateUrl: './cines.component.html',
  styleUrls: ['./cines.component.css']
})
export class CinesComponent implements OnInit {
  latitud: number;
  longitud: number;
  cines: any;
  cineSeleccionado: any = {};
  hidden: boolean;
  pelicula: string;

  constructor(private ruta: ActivatedRoute, private cinesService: CinesService) {
    this.pelicula = this.ruta.snapshot.params.nombre || null;
    this.latitud = 40.417097;
    this.longitud = -3.704106;
    this.hidden = true;
    this.cines = this.cinesService.getCines();

    if (this.pelicula != null){
      console.log(cinesService.getCinesPeli(this.pelicula));
      this.cines = cinesService.getCinesPeli(this.pelicula);
    } else {
      this.cinesService.getCines().subscribe((cines: any) => {
        cines = JSON.parse(cines._body).cines;
        this.cines = cines;
        var me = this;
        me.cines = Object.keys(me.cines).map(function(key){
          return me.cines[key];        
        })
      }); 
    }
    
    console.log("pelicula: "+(this.pelicula != null));
  }

  infoCine(cine){
    this.hidden = false;
    this.cineSeleccionado = cine;
  }

  ngOnInit() {
  }

}
