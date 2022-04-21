import { Injectable } from '@angular/core';
import {Equipo} from '../model/equipo.model';
@Injectable()
export class EquiposService {

    private equipos:any[] = [
        {
          nombre: "Ducks",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/ducks.webp",
          aparicion: "1941-11-01",
          division:"West"
        },
        {
          nombre: "Coyotes",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/coyotes.webp",
          aparicion: "1939-05-01",
          division:"West"
        },
        {
          nombre: "bruins",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/bruins.webp",
          aparicion: "1964-01-01",
          division: "West"
        },
        {
          nombre: "Sabres",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/sabres.webp",
          aparicion: "1962-05-01",
          division:"West"
        },
        {
          nombre: "Flames",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/flames.webp",
          aparicion: "1940-06-01",
          division: "East"
        },
        {
          nombre: "Hurricane",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/hurricanes.webp",
          aparicion: "1962-08-01",
          division: "East"
        },
        {
          nombre: "Blackhawks",
          bio: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto",
          img: "assets/img/blackhawks.webp",
          aparicion: "1974-11-01",
          division: "Central"
        }
      ];

    constructor() { 
        console.log("servicio listo");
     }
      
     //Recuperar Array de Equipos
     getEquipos():Equipo[]{
         return this.equipos;
     }

     //Recuperar un solo equipò
     getEquipo(id:number):Equipo[]{
       return this.equipos[id];
     }

     //Buscar un equipo por el NavBar
     buscarEquipo(textoNavBar:string):Equipo[]{
      let equipos:Equipo[] = [];
      textoNavBar = textoNavBar.toLowerCase();

      for(let equipo of this.equipos){
          let nombre = equipo.nombre.toLowerCase();

          if(nombre.indexOf(textoNavBar) >= 0){
              equipos.push(equipo);
          }
      }
      return equipos;
     }

    
}