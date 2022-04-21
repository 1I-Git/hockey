import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {EquiposService} from '../../services/equipos.service';
import {Equipo} from '../../model/equipo.model';
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

  verEquipo(id:number){

  }

}


