import { Injectable } from '@angular/core';

@Injectable()
export class NumerosPrimosService {
  listaFeNumeros: number[];
  constructor() { 
    this.listaFeNumeros=[1,2,4,5,7,9,17,18,25,44,73,88,91, 1084]
  }

  esPrimo(numero: number): boolean{
    if(numero === 2){
      return true;
    }
    if(numero < 3 || numero % 2 === 0 || numero !== Math.floor(numero)){
      return false;
    }
    let maximo = Math.floor(Math.sqrt(numero));
    for(let i=0; i<=maximo; i+=2){
      if(numero % i === 0){
        return false;
      }
    }
    return true;
  }//Fin de esPrimo

  esMultiploDeTres(numero: number): boolean{
    return numero % 3 == 0;
  }
}
