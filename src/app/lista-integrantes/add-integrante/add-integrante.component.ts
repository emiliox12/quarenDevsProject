import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Integrante } from 'src/app/shared/integrante.model';
import { ApiRequestService } from '../../services/api-request'

@Component({
  selector: 'app-add-integrante',
  templateUrl: './add-integrante.component.html',
  styleUrls: ['./add-integrante.component.css']
})
export class AddIntegranteComponent implements OnInit {

  @ViewChild('inputNombre', {static: false}) inputNombreRef;
  @ViewChild('inputEdad', {static: false}) inputEdadRef;
  @ViewChild('inputPuesto', {static: false}) inputPuestoRef;
  @Output() addIntegrante = new EventEmitter<Integrante>();
  @Output() createIntegrantes = new EventEmitter<Integrante[]>();

  createIntegranteURL = 'http://localhost:8080/person/new-person';
  getIntegrantesURL = 'http://localhost:8080/person/create-persons';


  constructor(private myApiService: ApiRequestService) { }

  ngOnInit(): void {

  }

  async onAddIntegrante(){
    let nombreIntegrante = this.inputNombreRef.nativeElement.value;
    let edadIntegrante = this.inputEdadRef.nativeElement.value;
    let puestoIntegrante = this.inputPuestoRef.nativeElement.value;
    if (nombreIntegrante && edadIntegrante && puestoIntegrante){
      this.addIntegrante.emit(new Integrante(nombreIntegrante, edadIntegrante, puestoIntegrante));
      let response = await this.myApiService.callApi(this.createIntegranteURL, {name: nombreIntegrante, age: edadIntegrante, position: puestoIntegrante})
      console.log(response);
    }
  }

  async onCreateIntegrantes(){
    let integrantes = await this.myApiService.callApi(this.getIntegrantesURL, {});
    this.createIntegrantes.emit(integrantes);
  }

}
