import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01-ngfor-ngif',
  templateUrl: './ejemplo01-ngfor-ngif.component.html',
  styleUrls: ['./ejemplo01-ngfor-ngif.component.css']
})
export class Ejemplo01NgforNgifComponent implements OnInit {

  variableDeInstancia : string;
  tomaArray : number[] = [1,2,3,4,5,6,7,8,9,99];
  boolPrueba: boolean = true;


  mostrarInformacion: boolean = true;


  constructor() {
    this.variableDeInstancia = "Renderizado componente ngif ngfor!!!!!";
   }

  ngOnInit() {
  }



//
  cambiarEstadoInformacion(): void {
    this.mostrarInformacion = !this.mostrarInformacion;
  }

  colorEnPares(numero: number): string{
    if((numero % 2) == 0){
      return "blue";
    }
    return "red";
  }
  

}

