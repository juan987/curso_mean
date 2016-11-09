import { Component, OnInit } from '@angular/core';
import { NumerosPrimosService} from '../numeros-primos.service'

@Component({
  selector: 'app-numeros-primos-panel',
  templateUrl: './numeros-primos-panel.component.html',
  styleUrls: ['./numeros-primos-panel.component.css'],
  providers: [NumerosPrimosService]
})
export class NumerosPrimosPanelComponent implements OnInit {


  private listaFeNumeros: number[];

  private mostrarInformacion: boolean = false;

  //Este es patron singleton
  constructor(private numerosPrimosService: NumerosPrimosService) { 
    this.listaFeNumeros = this.numerosPrimosService.listaFeNumeros;
    this.numerosPrimosService= numerosPrimosService;
  }

  ngOnInit() {
  }


  tipoDeNumero(numero: number){
      if(this.numerosPrimosService.esPrimo(numero)){
        return "Es un numero primo";
      } else if (this.numerosPrimosService.esMultiploDeTres(numero)){
        return "es multiplo de 3";
      } else{
        return "No es nada de nada, pobrecillo"; 
      }
  }

  eventoDeFilaRecibido(eventoRecibido: boolean){
    this.mostrarInformacion = eventoRecibido;
    console.log('Evento recibido:    ' +eventoRecibido);
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
