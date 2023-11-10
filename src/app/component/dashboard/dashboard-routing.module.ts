import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { CursosComponent } from './cursos/cursos.component';
import { CrearEstudianteComponent } from './crear-estudiante/crear-estudiante.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, children: [
      { path: 'Estudiantes', component: EstudiantesComponent },
      { path: 'Cursos', component: CursosComponent },
      { path: 'Clases', component: CursosComponent},
      { path: 'Crear-Estudiante', component: CrearEstudianteComponent},
    ]  
  },
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
