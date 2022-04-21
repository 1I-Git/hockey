import { Component, OnInit } from '@angular/core';
import {EquiposService} from '../../services/equipos.service';
@Component({
  selector: 'app-equipos',
  templateUrl: './equipos.component.html',
  styleUrls: ['./equipos.component.css']
})
export class EquiposComponent implements OnInit {
  
  equipos:Equipo[] = [];

  constructor( private _equiposService:EquiposService) { }

  ngOnInit(): void {
      this.equipos = this._equiposService.getEquipos();
      console.log(this.equipos);
  }

}

export interface Equipo{
  nombre: string;
  bio: string; 
  img: string;
  fundado: string;
  division: string;
};
