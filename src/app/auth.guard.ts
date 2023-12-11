import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  
  var token = localStorage.getItem('token');

  if(token){
    return true;
  }else{
    return false;}  
};
