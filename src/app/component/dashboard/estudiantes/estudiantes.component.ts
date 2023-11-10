import { Component, Inject, OnInit, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Estudiantes } from 'src/app/interface/estudiantes';
import { EstudiantesService } from 'src/app/services/estudiantes.service'





@Component({
  selector: 'app-estudiantes',
  templateUrl: './estudiantes.component.html',
  styleUrls: ['./estudiantes.component.css']
})

export class EstudiantesComponent implements OnInit {

  listEstudiantes: Estudiantes[]=[];
  

  displayedColumns: string[] = ['DNI', 'Nombre', 'Apellido', 'Sexo','Telefono','Email', 'Acciones'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  

  constructor(private estudianteService: EstudiantesService, private _snackBar : MatSnackBar) { }

  ngOnInit(): void {
    this.cargarEstudiantes();
  }

  cargarEstudiantes(){
    this.listEstudiantes = this.estudianteService.getEstudiante();
    this.dataSource = new MatTableDataSource(this.listEstudiantes);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  eliminarestudiante(index:number){
    console.log( index, 1);

    this.estudianteService.eliminarEstudiante(index);
    this.cargarEstudiantes();

    this._snackBar.open('El estudiante fue eliminado exitosamente', '',{
      duration:1500,
      horizontalPosition:'center',
      verticalPosition: 'bottom'
    })
  }

}
