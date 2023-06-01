import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){
    return sessionStorage.getItem("userEmail") != null;
  }
  getUserRole(){
    return sessionStorage.getItem("userRole").toString();
  }
}
