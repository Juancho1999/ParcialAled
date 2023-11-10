import { Injectable } from '@angular/core';
import { firebaseCodeErrorEnum } from '../utils/firebase-code-error';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }

  codeError(code: string) {

    switch (code) {
      //Usuario existente
      case firebaseCodeErrorEnum.emailAlreadyInUse:
        return 'El usuario ya existe';

      //Contraseña debil
      case firebaseCodeErrorEnum.weakPassword :
        return 'La contraseña es muy debil';

      //Email invalido
      case firebaseCodeErrorEnum.invalidEmail:
        return 'Correo Invalido';

      //Contraseña incorrecta
      case firebaseCodeErrorEnum.wrongPassword:
        return 'Contraseña Incorrecta';  

      //Usuario no encontrado
      case firebaseCodeErrorEnum.userNotFound:
        return 'Usuario No encontrado'; 

       //Credencial Incorrecta
       case firebaseCodeErrorEnum.invalidLoginCredentials:
        return 'Usuario y/o Contraseña incorrecta'; 

      default:
        return 'Error desconocido';
    }

  }
}
