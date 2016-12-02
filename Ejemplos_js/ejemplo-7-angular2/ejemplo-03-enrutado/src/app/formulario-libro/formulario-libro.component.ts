import { Component, OnInit } from '@angular/core';


import {Router} from '@angular/router'

import {Libro} from '../libro'
import {BibliotecaService} from '../Biblioteca.Service'

@Component({
  selector: 'app-formulario-libro',
  templateUrl: './formulario-libro.component.html',
  styleUrls: ['./formulario-libro.component.css'],
  providers:[BibliotecaService]
})
export class FormularioLibroComponent implements OnInit {
  private libro: Libro;
  constructor(private service: BibliotecaService,
              //Para redirigir por codigo
              private router: Router) { }

  ngOnInit() {
    this.libro = new Libro(null,"");
  }

  enviarFormulario(formulario: any){

    this.service.addLibro(this.libro).subscribe(
      (datos)=>{
          console.log('Libro guardado:  '  +datos.id);
      },
      (error)=>{

      },
      ()=>{console.log('Fin de insertar nuevo libro')}
    );//fin del subscribe

    this.router.navigateByUrl("/listar");
  }

}
