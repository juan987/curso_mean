import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo01base',
  templateUrl: './ejemplo01base.component.html',
  styleUrls: ['./ejemplo01base.component.css']
})
export class Ejemplo01baseComponent implements OnInit {

  public name: string = "Ruben";
  public name1: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  metodoDeComponente(): string{
    return 'Hola soy juan'
  }

}
