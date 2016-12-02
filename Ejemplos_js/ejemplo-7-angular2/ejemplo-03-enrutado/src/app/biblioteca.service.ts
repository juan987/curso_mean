import { Injectable } from '@angular/core';

import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Observable} from 'rxjs/Rx'

//Importo operadores de Rx
// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

import {Libro} from './libro'



@Injectable()
export class BibliotecaService {

  private url = 'http://localhost:3000/libros';

  constructor(private http: Http) { 

  }

  //USAMOS OBSERVABLE POR QUE QUEREMOS QUE SEA ASINCRONO
  getLibros(): Observable<Libro[]>{
    return this.http.get(this.url)
                    //Como lo hice en peliculas angular 2
                    //.map(this.extractData)
                    .map((response: Response) => {
                      return response.json;
                    })
                    //Como lo hice en peliculas angular 2    
                    //.catch(this.handleError);
                    .catch((error: any) =>{
                      console.log('Error al procesar la peticion');
                      return Observable.throw(error.json().error || "Error de servidor)");
                    });
  }
  
  private extractData(res: Response) {
    return res.json;
  }
  private handleError (error: Response | any) {
      console.log('Error al procesar la peticion');
      return Observable.throw(error.json().error || "Error de servidor)");
  }

}//fin de la clase
