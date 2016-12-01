import { Routes } from '@angular/router';

import {ConsultaLibroComponent} from './consulta-libro/consulta-libro.component';
import {FormularioLibroComponent} from './formulario-libro/formulario-libro.component';
import {ListaLibrosComponent} from './lista-libros/lista-libros.component';

export const AppRoutes: Routes = [
    //Lo que se pone en el navegador
    {path : '', redirectTo: 'listar', pathMatch:'full'},
    //Cuando llega a la vista listar, le digo que muestreel componente ListaLibrosComponent
    {path: 'listar', component : ListaLibrosComponent},
    {path: 'consultar/:id', component : ConsultaLibroComponent},
    {path: 'formulario', component : FormularioLibroComponent},
]