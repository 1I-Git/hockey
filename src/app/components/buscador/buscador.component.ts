import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EquiposService } from './../../services/equipos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {

  equipos:any[] = [];
  texto:string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private equipoService: EquiposService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.texto = params['texto'];
      this.equipos = this.equipoService.buscarEquipo(params['texto']);
      console.log(this.equipos)
    });
  }

  
}
