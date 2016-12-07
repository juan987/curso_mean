import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';



import * as io from 'socket.io-client';

import {Message} from './message' //Estamos al mismo nivel

@Injectable()
export class ChatService {

  private url: string = 'http://localhost:3000';




  private urlChat: string = 'http://localhost:3000/chat';
  private urlOtro: string = 'http://localhost:3000/otro';
  private urlFin: string = 'http://localhost:3000/fin';


  private socket;


  constructor() { }

  //Metodos
  sendMessage(message): void{
    this.socket.emit('mando-un-mensaje', message);
  }

  //getMessages(): Observable{
  getMessages(){
    return new Observable(
      //1
      (observer)=>{//El observer tiene distintos metodos
        //Conexion con el servidor
        this.socket = io(this.url);//Conexion con el server, ler pido un socket
        //metodos de gestion de mensajes
        this.socket.on('connect', ()=>{//Evento: escucho el evento connect
          console.log('Cliente conectado con id: ' +this.socket.id)
        });//Evento de conexion connect
        //Mensajes que recibo, estoy oyendo continuamente
        this.socket.on('mando-un-mensaje', (datos)=>{
          console.log('Escuchando.....')
          //Next es lo que se ejecuta al subscribirme en chat.components.ts
          observer.next(datos);
        });
        //Le doy una forma de unsubscribe del Observable
        //Esto es lo que se ejecuta en chat.component como:
        // ngOnDestroy(){
        //this.connection.unsubscribe();
        return ()=>{
          this.socket.disconnect();
        }
      }//Fin 
    );//Fin del new observable
  }//Fin de get messages

}
