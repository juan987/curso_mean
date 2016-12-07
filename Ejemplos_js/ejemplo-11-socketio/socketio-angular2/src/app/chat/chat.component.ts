import { Component, OnInit } from '@angular/core';


import {ChatService} from '../chat.service';
import {Message} from '../message';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],

  providers: [ChatService]
})
export class ChatComponent implements OnInit, OnDestroy {

  private messages: Message[] = [];
  private message: Message; //El mensaje de la pagina http
  private connection;


  sendMessage(){
      this.service.sendMessage(this.message);
  }


  constructor(private service: ChatService) { 

  }

  ngOnInit() {
    this.message = new Message("","");
    this.connection = this.service.getMessages().subscribe(
      //Eventos recibidos
      (newMessage: Message)=>{//ES el observer.next(datos) del servicio
        console.log('Nuevo mensaje recibido del server');
        //Guardamos el mensaje enelarray
        this.messages.push(newMessage);
      }
    )//Fin derl subscribe
  }

  ngOnDestroy(){
    this.connection.unsubscribe();
  }

}
