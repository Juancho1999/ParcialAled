import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Estudiante } from '../../interface/estudiantes';

@Component({
  selector: 'app-alumnohijo',
  templateUrl: './alumno-hijo.component.html',
  styleUrls: ['./alumno-hijo.component.css']
})
export class AlumnoHijoComponent implements OnInit {
  
  @Input() estudianteAEditar! : Estudiante;
  @Output() EventoEstudianteHijo: EventEmitter<Estudiante> = new EventEmitter<Estudiante>();
  @Output() cerrarComponenteHijo: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  EditarEstudiante(estudianteModificado:Estudiante){

    let estudianteActualizado : Estudiante = {
      legajo : estudianteModificado.legajo,
      nombre : estudianteModificado.nombre,
      apellido : estudianteModificado.apellido,
      carrera :  estudianteModificado.carrera,
      regular : estudianteModificado.regular,
      fecha_inscripcion : estudianteModificado.fecha_inscripcion
    } 

    this.EventoEstudianteHijo.emit(estudianteActualizado)
  }
 
  cerrarComponente() {
    this.cerrarComponenteHijo.emit();
  }

}
