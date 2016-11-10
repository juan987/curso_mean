import { Component, OnInit } from '@angular/core';
import {Libro} from '../modelo/Libro';
//Que libro este en mayuscula o minuscula, da igual

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
libro: Libro;

  constructor() { 
    //this.libro = new Libro("supertitulo", "juan");
    this.libro = new Libro("", "");

  }

  ngOnInit() {
  }

  enviarFormulario(formulario: any){
    console.log("Estoy en metodo enviarFormulario");
    console.log("Datos del formulario enviado"  +formulario.titulo);
    console.log("El libro es:  " +this.libro);

    this.libro.titulo = "Otro valor";

  }

}
