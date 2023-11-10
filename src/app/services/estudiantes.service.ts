import { Injectable } from '@angular/core';
import { Estudiantes } from '../interface/estudiantes';


@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  listEstudiantes: Estudiantes[] = [
    {DNI: 1, nombre: 'Viviana', apellido: "Orozco", sexo: 'Femenino', telefono: 14523, email: "Viviorozco2@gmail.com"},
    {DNI: 2, nombre: 'Agustina', apellido: "Elizalde", sexo: 'Femenino', telefono: 98463, email: "Aguseli8@outlook.com"},
    {DNI: 3, nombre: 'Ulises', apellido: "Valderrama", sexo: 'Masculino', telefono: 58136, email: "Ulirrama9@outlook.com"},
    {DNI: 4, nombre: 'Pablo', apellido: "Salvador", sexo: 'Masculino', telefono: 94231, email: "PabloSal5@gmail.com"},
    {DNI: 5, nombre: 'Tina', apellido: "Barti", sexo: 'Femenino', telefono: 14523, email: "Tinabarti8@gmail.com"},
  ];
  

  constructor() {}

  getEstudiante(){
    return this.listEstudiantes.slice();
  }

  eliminarEstudiante(index:number){
    this.listEstudiantes.splice( index, 1)
  }

  agregarEstudiante(estudiante: Estudiantes){
    this.listEstudiantes.unshift(estudiante);
  }
}