/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Ejemplo01baseComponent } from './ejemplo01base.component';

describe('Ejemplo01baseComponent', () => {
  let component: Ejemplo01baseComponent;
  let fixture: ComponentFixture<Ejemplo01baseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ejemplo01baseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ejemplo01baseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Existe la propiedad nombre', ()=>{
    expect(component.name).toBe('Ruben');
  });

  it('El metodoDeComponent', ()=>{
    expect(component.metodoDeComponente()).toBe('Hola soy juan');
  });


  it('jjjjj', ()=>{
    
  });
});
