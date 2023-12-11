import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Profesor } from 'src/app/interface/profesor';
import { ProfesoresService } from 'src/app/services/profesores.service';

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{

  constructor(private toastr: ToastrService,
              private service: ProfesoresService) {}
  ngOnInit(): void {
    this.listaProfesores= this.service.getProfesores();
  }

  listaProfesores !: Profesor[];
  mostrarComponenteHijo: boolean = false;
  mostrarFormularioAgregar: boolean = false;
  
  profesorAModificar : Profesor = {
    DNI : null,
    nombre : '',
    apellido : '',
    vocacion: '',
    ejerciendo : false,
    fecha_ingreso : ''
  }

  profesorNuevo : Profesor = {
    DNI : null,
    nombre : '',
    apellido : '',
    vocacion: '',
    ejerciendo : false,
    fecha_ingreso : ''
  }


  AgregarProfesorEnEsteComponente(){
    if(this.validarCampos(this.profesorNuevo)){
    this.listaProfesores.push(this.profesorNuevo);
    this.CancelarFormAgregar();
    this.mostrarFormularioAgregar = false;
    }
  }

  EliminarProfesor(profesorAEliminar: Profesor) {
    const index = this.listaProfesores.findIndex((unProfesor) => unProfesor.DNI === profesorAEliminar.DNI);
    if (index !== -1) {
      this.listaProfesores.splice(index, 1);
    }
  }

EditarProfesorQueVieneDesdeHijo(profesor:Profesor){
  if(this.validarCampos(profesor)){
  const index = this.listaProfesores.findIndex((unProfesor) => unProfesor.DNI === profesor.DNI);
  if (index !== -1) {
    this.listaProfesores[index] = profesor;
  }
}
}

EditarProfesor(ProfesorAEditar:Profesor): void {
  this.mostrarComponenteHijo = true;

  this.profesorAModificar = { 
    DNI: ProfesorAEditar.DNI,
    nombre: ProfesorAEditar.nombre,
    apellido: ProfesorAEditar.apellido,
    vocacion: ProfesorAEditar.vocacion,
    ejerciendo: ProfesorAEditar.ejerciendo,
    fecha_ingreso: ProfesorAEditar.fecha_ingreso,
  }; 
}

cerrarComponenteHijo() {
  this.mostrarComponenteHijo = false;
}

mostrarFormAgregar(): void {
  this.mostrarFormularioAgregar = true;
}

CancelarFormAgregar(): void {

  this.profesorNuevo = { // Restablecer el objeto estudianteActual a sus valores iniciales
    DNI: null,
    nombre: '',
    apellido: '',
    vocacion: '',
    ejerciendo: false,
    fecha_ingreso: ''
  };

  this.mostrarFormularioAgregar = false;
}

validarCampos(profesores: Profesor){
  if(profesores.DNI == null){
    this.toastr.error('campos vacios', 'Error');
      return false
  } else if (profesores.nombre == ''){
    this.toastr.error('campos vacios', 'Error');
    return false
  } else if (profesores.apellido == ''){
    this.toastr.error('campos vacios', 'Error');
    return false
  } else if (profesores.vocacion == ''){
    this.toastr.error('campos vacios', 'Error');
    return false;
  }else return true;


}

}
