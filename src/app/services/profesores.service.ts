import { Injectable } from '@angular/core';
import { Profesor } from '../interface/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor() { }

  
  listaProfesores: Profesor[] = [
    { 
      DNI : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      vocacion : 'Programador',
      ejerciendo : true,
      fecha_ingreso : '2022-02-23'
    },
    { 
      DNI : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      vocacion : 'Abogado',
      ejerciendo : false,
      fecha_ingreso : '2022-05-02'
    },
    { 
      DNI : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      vocacion : 'Contadora',
      ejerciendo : true,
      fecha_ingreso : '2022-03-23'
    },
    { 
      DNI : 4741,
      nombre : 'Sol Patricia',
      apellido : 'González',
      vocacion : 'Analista de sistemas',
      ejerciendo : false,
      fecha_ingreso : '2021-02-15'
    },
    { 
      DNI : 4358,
      nombre : 'Carla Andrea',
      apellido : 'Funes',
      vocacion : 'Docente',
      ejerciendo : true,
      fecha_ingreso : '2022-03-15'
    },
  ]

  
  getProfesores(){
    return this.listaProfesores;
  }
}
