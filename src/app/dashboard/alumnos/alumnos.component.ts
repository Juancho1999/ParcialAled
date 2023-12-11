import { Component, OnInit, inject } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

import { Estudiante } from 'src/app/interface/estudiantes';
import { AlumnosService } from 'src/app/services/alumnos.service'; 

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit{


  constructor(private toastr: ToastrService,
              private service: AlumnosService) {
  
  }
  ngOnInit(): void {
    this.listaEstudiantes = this.service.getAlumnos();
  }

  listaEstudiantes!: Estudiante[];

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

 
  AgregarEstudianteEnEsteComponente(){
    if(this.validarCampos(this.estudianteNuevo)){
    this.listaEstudiantes.push(this.estudianteNuevo);
    this.CancelarFormAgregar();
    }
  }

  EliminarAlumno(estudianteAEliminar: Estudiante) {
    const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudianteAEliminar.legajo);
    if (index !== -1) {
      this.listaEstudiantes.splice(index, 1);
    }
  }

EditarAlumnoQueVieneDesdeHijo(estudiante:Estudiante){
  if(this.validarCampos(estudiante)){
  const index = this.listaEstudiantes.findIndex((unEstudiante) => unEstudiante.legajo === estudiante.legajo);
  if (index !== -1) {
    this.listaEstudiantes[index] = estudiante;
  }
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


validarCampos(alumnos: Estudiante){
  if(alumnos.legajo == null){
    this.toastr.error('campos vacios', 'Error');
      return false
  } else if (alumnos.nombre == ''){
    this.toastr.error('campos vacios', 'Error');
    return false
  } else if (alumnos.apellido == ''){
    this.toastr.error('campos vacios', 'Error');
    return false
  } else if (alumnos.carrera == ''){
    this.toastr.error('campos vacios', 'Error');
    return false;
  }else return true;


}

}
