import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numeros-primos-fila',
  templateUrl: './numeros-primos-fila.component.html',
  styleUrls: ['./numeros-primos-fila.component.css'],
  //Le puedo pasar a la clase un numero desde fuera asociado a la variable numero
  inputs:['numero'],

  //Definicion del evento
  outputs: ['eventoMostrar']
})
export class NumerosPrimosFilaComponent implements OnInit {
  private numero: number = 1;

  //clase 9 nov 16, Event emitter para propagar el evento
  private eventoMostrar: EventEmitter<boolean> = new EventEmitter<boolean>();
  private mostrarContenido: boolean = false;



  constructor() { }

  ngOnInit() {
  }

  enviarNotificacion(): void{
    this.mostrarContenido = !this.mostrarContenido;

    //Emitimos el evento, pero ahora no lo recoge nadie.
    this.eventoMostrar.emit(this.mostrarContenido);
    console.log('Evento enviado!!!!' +this.mostrarContenido)

  }

}
