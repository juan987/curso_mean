import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  //Le puedo pasar a la clase un numero desde fuera asociado a la variable numero
  inputs:['numero']
})
export class NumerosPrimosFilaComponent implements OnInit {
  private numero: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
