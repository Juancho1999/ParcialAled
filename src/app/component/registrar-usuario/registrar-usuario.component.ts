import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  loading: boolean = false;
  registrarUsuario: FormGroup;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService) 
    { 
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      pass: ['', Validators.required],
      repetirPass: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  registrar() {

    const email = this.registrarUsuario.value.email;
    const pass = this.registrarUsuario.value.pass;
    const passRepetida = this.registrarUsuario.value.repetirPass;

    if (pass != passRepetida) {
      this.toastr.error('Las contraseñas deben ser las mismas', 'error');
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, pass).then((user) => {
      this.verificarCorreo();
    }).catch((error) => {
      this.loading=false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'error');
    });
  }

  verificarCorreo() {
    this.afAuth.currentUser
      .then((user) => user?.sendEmailVerification())
      .then(() => {
        this.toastr.info(
          'Le enviamos un correo electronico para su verificacion',
          'Verificar correo'
        );
        this.router.navigate(['/login']);
      });
  }
}
