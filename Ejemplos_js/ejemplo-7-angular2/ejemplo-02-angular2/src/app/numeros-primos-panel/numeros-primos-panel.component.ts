import { Component, OnInit } from '@angular/core';
import { NumerosPrimosService} from '../numeros-primos.service'

@Component({
  selector: 'app-numeros-primos-panel',
  templateUrl: './numeros-primos-panel.component.html',
  styleUrls: ['./numeros-primos-panel.component.css'],
  providers: [NumerosPrimosService]
})
export class NumerosPrimosPanelComponent implements OnInit {


  listaFeNumeros: number[];

  //Este es patron singleton
  constructor(private numerosPrimosService: NumerosPrimosService) { 
    this.listaFeNumeros = this.numerosPrimosService.listaFeNumeros;
    this.numerosPrimosService= numerosPrimosService;
  }

  ngOnInit() {
  }




/*
  cambiarEstadoInformacion(): void {
    this.mostrarInformacion = !this.mostrarInformacion;
  }
*/


  colorEnDistintosEstados(numero: number):string{
      if(this.numerosPrimosService.esPrimo(numero)){
        return "red";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "orange";
      } else{
        return "blue"; 
      }
  }

}
