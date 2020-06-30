import { Component, OnInit, Input } from '@angular/core';
import { Integrante } from 'src/app/shared/integrante.model';

@Component({
  selector: 'app-integrante',
  templateUrl: './integrante.component.html',
  styleUrls: ['./integrante.component.css']
})
export class IntegranteComponent implements OnInit {

  @Input() integrante: Integrante;

  constructor() { }

  ngOnInit(): void {
  }

}
