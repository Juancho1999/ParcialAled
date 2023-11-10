import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CursosComponent } from './cursos/cursos.component';
import { MateriasComponent } from './materias/materias.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';



@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    CursosComponent,
    MateriasComponent,
    EstudiantesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
