import { Component, OnInit } from '@angular/core';

import { Integrante } from '../shared/integrante.model';
import { ApiRequestService } from '../services/api-request';

@Component({
  selector: 'app-lista-integrantes',
  templateUrl: './lista-integrantes.component.html',
  styleUrls: ['./lista-integrantes.component.css']
})
export class ListaIntegrantesComponent implements OnInit {

  serviceUrl = 'http://localhost:8080/person/create-person';

  integrantes: Integrante[] = [];

  constructor(private apiRequest: ApiRequestService) { }

  ngOnInit(): void {
    
  }

  addIntegranteLista(integrante: Integrante){
    this.integrantes.push(integrante);
  }

  createListaIntegrantes(integrantes){
    console.log(integrantes);
    this.integrantes = integrantes;
  }
}
