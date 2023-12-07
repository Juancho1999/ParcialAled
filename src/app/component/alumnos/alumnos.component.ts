import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Estudiante } from 'src/app/interface/estudiantes';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{

  firestore: Firestore = inject(Firestore)
  items: Observable<any[]>;

  constructor() {
    const aCollection = collection(this.firestore, 'cursos')
    this.items = collectionData(aCollection);
  }
  ngOnInit(): void {}

  mostrarComponenteHijo: boolean = false;
  mostrarFormularioAgregar: boolean = false;
  
  estudianteAModificar : Estudiante = {
    legajo : null,
    nombre : '',
    apellido : '',
    carrera : '',
    regular : false,
    fecha_inscripcion : ''
  }

  estudianteNuevo : Estudiante = {
    legajo : null,
    nombre : '',
    apellido : '',
    carrera : '',
    regular : false,
    fecha_inscripcion : ''
  }

  listaEstudiantes: Estudiante[] = [
    { 
      legajo : 1234,
      nombre : 'Juan Carlos',
      apellido : 'Gutierrez',
      carrera : 'Angular',
      regular : true,
      fecha_inscripcion : '2022-02-23'
    },
    { 
      legajo : 3568,
      nombre : 'Felipe Luis',
      apellido : 'Gómez',
      carrera : 'Java',
      regular : false,
      fecha_inscripcion : '2022-05-02'
    },
    { 
      legajo : 4778,
      nombre : 'Marcela ',
      apellido : 'Diaz Lopez',
      carrera : 'Javascript',
      regular : true,
      fecha_inscripcion : '2022-03-23'
    },
    { 
      legajo : 4741,
      nombre : 'Sol Patricia',
      apellido : 'González',
      carrera : 'MySQL',
      regular : false,
      fecha_inscripcion : '2021-02-15'
    },
    { 
      legajo : 4358,
      nombre : 'Carla Andrea',
      apellido : 'Funes',
      carrera : 'NodeJs',
      regular : true,
      fecha_inscripcion : '2022-03-15'
    },
  ]

  AgregarEstudianteEnEsteComponente(){

    this.listaEstudiantes.push(this.estudianteNuevo);
    this.CancelarFormAgregar();
    
  }

  EliminarAlumno(estudianteAEliminar: Estudiante) {
    const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudianteAEliminar.legajo);
    if (index !== -1) {
      this.listaEstudiantes.splice(index, 1);
    }
  }

EditarAlumnoQueVieneDesdeHijo(estudiante:Estudiante){
  const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudiante.legajo);
  if (index !== -1) {
    this.listaEstudiantes[index] = estudiante;
  }
}

EditarAlumno(estudianteAEditar:Estudiante): void {
  this.mostrarComponenteHijo = true;

  this.estudianteAModificar = { 
    legajo: estudianteAEditar.legajo,
    nombre: estudianteAEditar.nombre,
    apellido: estudianteAEditar.apellido,
    carrera: estudianteAEditar.carrera,
    regular: estudianteAEditar.regular,
    fecha_inscripcion: estudianteAEditar.fecha_inscripcion,
  }; 
}

cerrarComponenteHijo() {
  this.mostrarComponenteHijo = false;
}

mostrarFormAgregar(): void {
  this.mostrarFormularioAgregar = true;
}

CancelarFormAgregar(): void {

  this.estudianteNuevo = { // Restablecer el objeto estudianteActual a sus valores iniciales
    legajo: null,
    nombre: '',
    apellido: '',
    carrera: '',
    regular: false,
    fecha_inscripcion: ''
  };

  this.mostrarFormularioAgregar = false;
}

}
