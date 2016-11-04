import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {

  variableDeInstancia : string;
  tomaArray : number[] = [1,2,3,4,5,6,7,8,9];


  constructor() {
    this.variableDeInstancia = "Renderizado componente ngif ngfor!!!!!";
   }

  ngOnInit() {
  }

}
