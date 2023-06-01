import { HttpClient } from '@angular/common/http';
import { Injectable, setTestabilityGetter } from '@angular/core';
import { find } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  curUseremail:string;
  curUserPass: string;

  baseURL:string = "http://localhost:3000/Users"
  constructor(private http: HttpClient) { }

  getUserData(email:string,password:string){
    this.curUseremail = email;
    this.curUserPass = password;
    return this.http.get(this.baseURL + "?email=" + email);
  }

  registerNewUser(user:User){
    return this.http.post(this.baseURL, user);
  }

}
