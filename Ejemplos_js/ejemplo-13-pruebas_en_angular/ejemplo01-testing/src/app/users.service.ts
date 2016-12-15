import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  constructor() { }

getUsers(): Array<string>{
  //Aqui hago todo el trabajo sucio, este es el servicio de verdad
  return ["luis", "pepe", "juan"];
}




}
