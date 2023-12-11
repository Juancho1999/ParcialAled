
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { RecuperarPasswordComponent } from './component/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './component/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './component/verificar-correo/verificar-correo.component';
import { AlumnosComponent } from './dashboard/alumnos/alumnos.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { authGuard } from './auth.guard';
import { ProfesoresComponent } from './dashboard/profesores/profesores.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'recuperar-password', component: RecuperarPasswordComponent},
  {path:'registrar-usuario', component: RegistrarUsuarioComponent},
  {path:'verificar-correo', component: VerificarCorreoComponent},
  
  {path:'dashboard', component:DashboardComponent, canActivate:[authGuard] ,children:[
   {path: 'alumnos', component:AlumnosComponent},
   { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
   {path:'profesores', component:ProfesoresComponent}
]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
