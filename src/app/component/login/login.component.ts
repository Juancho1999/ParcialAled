import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
loginForm: FormGroup;
loading=false;

  constructor (private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private toastr: ToastrService,
    private router: Router,
    private firebaseError: FirebaseCodeErrorService){
    this.loginForm = this.fb.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required]  
  });
  }

  ngOnInit():void{}
 
  login(){

    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
    
    this.loading = true;
    this.afAuth.signInWithEmailAndPassword(email, password).then((user)=>{
     
      if(user.user?.emailVerified) {
        this.afAuth.idToken.subscribe(data=>{if(data){localStorage.setItem('token',data)}});
        this.router.navigate(['/dashboard']);
        
      } else {
        this.router.navigate(['/verificar-correo']);
      }
    }).catch((error)=>{
      this.loading = false;
      this.toastr.error(this.firebaseError.codeError(error.code), 'Error');
    });
  }
}
