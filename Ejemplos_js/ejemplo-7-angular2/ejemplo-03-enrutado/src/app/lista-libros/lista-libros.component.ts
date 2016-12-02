import { Component, OnInit } from '@angular/core';


import {Libro} from '../libro';

import {BibliotecaService} from '../Biblioteca.Service'

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styleUrls: ['./lista-libros.component.css'],
  providers:[BibliotecaService]
})
export class ListaLibrosComponent implements OnInit {

  private libros: Libro[];

  constructor(private service: BibliotecaService) {
    //this.libros = [new Libro(1, "hhh"), new Libro(2, 'pppp')];
    //Me subscribo al map y al error, que devuelven un array de json o un mensaje de error
    this.service.getLibros().subscribe((datos)=>{
        this.libros = datos;
    },
    (error)=>{
        console.log('Error en el get de libros: ' +error);
    },
    //Este siempre se ejecuta akl final
    ()=>{console.log('Operacion get completada')}
    );//fin del subscribe
   }//Fin constructor

  ngOnInit() {
  }

}
