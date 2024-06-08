import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'enviroments/enviroment';
import { userRegister } from '../interfaces/userRegister';
import { userLogin } from '../interfaces/userLogin';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor( private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/';
  }

  signIn(userRegister: userRegister): Observable<any> {
    return this.http.post(this.myAppUrl + this.myApiUrl+'usuarios/create', userRegister);
  }

  logIn(userLogin: userLogin): Observable<any> {
    return this.http.post<any>(this.myAppUrl + this.myApiUrl+'/login', userLogin);
  }

}
