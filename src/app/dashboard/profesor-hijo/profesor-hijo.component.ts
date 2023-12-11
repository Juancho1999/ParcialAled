import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Profesor } from 'src/app/interface/profesor';

@Component({
  selector: 'app-profesor-hijo',
  templateUrl: './profesor-hijo.component.html',
  styleUrls: ['./profesor-hijo.component.css']
})
export class ProfesorHijoComponent implements OnInit {
  
  @Input() profesorAEditar! : Profesor;
  @Output() EventoProfesorHijo: EventEmitter<Profesor> = new EventEmitter<Profesor>();
  @Output() cerrarComponenteHijo: EventEmitter<void> = new EventEmitter<void>();

  ngOnInit(): void {}

  EditarProfesor(profesorModificado:Profesor){

    let profesorActualizado : Profesor = {
      DNI : profesorModificado.DNI,
      nombre : profesorModificado.nombre,
      apellido : profesorModificado.apellido,
      vocacion :  profesorModificado.vocacion,
      ejerciendo : profesorModificado.ejerciendo,
      fecha_ingreso : profesorModificado.fecha_ingreso
    } 

    this.EventoProfesorHijo.emit(profesorActualizado)
  }
 
  cerrarComponente() {
    this.cerrarComponenteHijo.emit();
  }

}
