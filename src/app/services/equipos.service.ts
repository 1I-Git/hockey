import { Injectable } from '@angular/core';
import {Equipo} from '../components/equipos/equipos.component';
@Injectable()
export class EquiposService {

    private equipos:any[] = [
        {
          nombre: "Ducks",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/ducks.webp",
          aparicion: "1941-11-01",
          casa:"West"
        },
        {
          nombre: "Coyotes",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/coyotes.webp",
          aparicion: "1939-05-01",
          casa:"West"
        },
        {
          nombre: "bruins",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/bruins.webp",
          aparicion: "1964-01-01",
          casa: "West"
        },
        {
          nombre: "Sabres",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/sabres.webp",
          aparicion: "1962-05-01",
          casa:"West"
        },
        {
          nombre: "Flames",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/flames.webp",
          aparicion: "1940-06-01",
          casa: "East"
        },
        {
          nombre: "Hurricane",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/hurricanes.webp",
          aparicion: "1962-08-01",
          casa: "East"
        },
        {
          nombre: "Blackhawks",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/blackhawks.webp",
          aparicion: "1974-11-01",
          casa: "Central"
        }
      ];

    constructor() { 
        console.log("servicio listo");
     }

     getEquipos():Equipo[]{
         return this.equipos;
     }
    
}