import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'

import {Libro} from '../libro'


@Component({
  selector: 'app-consulta-libro',
  templateUrl: './consulta-libro.component.html',
  styleUrls: ['./consulta-libro.component.css']
})
export class ConsultaLibroComponent implements OnInit {

  private mi_libro: Libro;

  constructor( private route: ActivatedRoute) {
    this.mi_libro = new Libro(0, "kekekekekekeke");
   }

  ngOnInit() {
    this.mi_libro.id =   this.route.snapshot.params['id'];
  }

}
