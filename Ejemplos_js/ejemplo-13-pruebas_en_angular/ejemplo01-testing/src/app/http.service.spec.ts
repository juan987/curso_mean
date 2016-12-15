/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HttpService } from './http.service';

import {Http, BaseRequestOptions, Response, ResponseOptions} from '@angular/http';
import {MockBackend, MockConnection} from '@angular/http/testing';

describe('Service: Http', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        BaseRequestOptions,
        MockBackend,
        {
          provide: Http,
          useFactory: (backend: MockBackend,defaultOptions: BaseRequestOptions)=>{
            return new Http(backend, defaultOptions);
          },

          deps: [MockBackend, BaseRequestOptions]

        }
        ]
    });
  });


  beforeEach(inject([MockBackend], (backend: MockBackend)=>{
      const miResponse = new ResponseOptions({body:'morcillas'})

      backend.connections.subscribe((conn)=>{conn.mockResponse(miResponse)});
  }));


  it('should ...', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));

  //Esta es la prueba
  it('A ver si el servicio me devuelve billetes', inject([HttpService],(service: HttpService)=>{
    service.gimmeTheMoney().sbscribe((response: Response)=>{
      expect(response.text()).toBe('morcillas');
    })
  }));

});
