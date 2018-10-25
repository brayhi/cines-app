import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../services/pelicula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id=null;
  comentarios = null;
  
  pelicula:{};
  constructor(private ruta: ActivatedRoute, public pelisServices: PeliculaService) { 
    this.id = this.ruta.snapshot.params['id'];
  }
  getPelicula() {
    
    this.pelisServices.getPelicula(this.id).subscribe(data => {this.pelicula = data;})
  }

  ngOnInit() {
    this.getPelicula();
  }
}
