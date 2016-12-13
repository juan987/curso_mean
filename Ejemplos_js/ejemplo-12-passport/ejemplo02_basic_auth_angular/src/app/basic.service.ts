import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class BasicService {

  constructor(private http: Http) { }
    getResultado(): Observable<string>{
      //En la cabecera es donde ponemos los temas de seguridad
      //let cabeceraDeSeguridad = new Headers({'Content-Type':'application/json'});
      let cabeceraDeSeguridad = new Headers();
      let username = "luis";
      let password = "luis";
      let opcionesDeRequest = new RequestOptions({headers:cabeceraDeSeguridad});
      cabeceraDeSeguridad.append('Authorization', "Basic " +btoa( username +":" +password) );

      return this.http.get('http://127.0.0.1:8080/home', opcionesDeRequest)//NO usar localhost:8080!!!!
      
              .map((response: Response)=>{
                return response;
              })
              .catch((error:any)=>{
                console.error("Error!!!!", error);
                return Observable.throw('Error al procesar la peticion')
              });

    }
      
}
