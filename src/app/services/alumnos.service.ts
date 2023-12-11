import { Injectable } from '@angular/core';
import { Estudiante } from '../interface/estudiantes';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Radiologia',
      regular : true,
      fecha_inscripcion : '2022-02-23'
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Diseño Industrial',
      regular : false,
      fecha_inscripcion : '2022-05-02'
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Higiene y seguridad',
      regular : true,
      fecha_inscripcion : '2022-03-23'
    },
    { 
      legajo : 4741,
      nombre : 'Sol Patricia',
      apellido : 'González',
      carrera : 'Enfermeria',
      regular : false,
      fecha_inscripcion : '2021-02-15'
    },
    { 
      legajo : 4358,
      nombre : 'Carla Andrea',
      apellido : 'Funes',
      carrera : 'TESAS',
      regular : true,
      fecha_inscripcion : '2022-03-15'
    },
  ]


  getAlumnos(){
    return this.listaEstudiantes;
  }

}
