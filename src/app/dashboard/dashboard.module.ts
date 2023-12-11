import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AlumnoHijoComponent } from './alumno-hijo/alumno-hijo.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../component/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorHijoComponent } from './profesor-hijo/profesor-hijo.component';


@NgModule({
  declarations: [AlumnoHijoComponent, AlumnosComponent, NavbarComponent, DashboardComponent, ProfesoresComponent, ProfesorHijoComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    BrowserModule
  ]
})
export class DashboardModule { }
