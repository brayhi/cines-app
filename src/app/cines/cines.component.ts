import { Component, OnInit } from '@angular/core';
import { CinesService } from '../services/cines.service';

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

  constructor(private cinesService: CinesService) {
    this.latitud = 40.417097;
    this.longitud = -3.704106;
    this.hidden = true;
    this.cines = this.cinesService.getCines();

    this.cinesService.getCines().subscribe((cines: any) => {
      
      cines = JSON.parse(cines._body).cines;
      console.log(cines);
      this.cines = cines;
      var me = this;
      me.cines = Object.keys(me.cines).map(function(key){
        return me.cines[key];        
      })
    });

    
  }

  infoCine(cine){
    console.log(cine);
    this.hidden = false;
    this.cineSeleccionado = cine;
    console.log(this.cineSeleccionado);
  }

  ngOnInit() {
  }

}
