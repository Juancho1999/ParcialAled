import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './component/shared/shared.module';


//componentes
import { LoginComponent } from './component/login/login.component';
import { RegistrarUsuarioComponent } from './component/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './component/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './component/recuperar-password/recuperar-password.component';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatToolbarModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
