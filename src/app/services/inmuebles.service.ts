import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'enviroments/enviroment';
import { Observable } from 'rxjs';
import { inmueble } from '../interfaces/inmuebles';
import { Visita } from '../interfaces/visita';

@Injectable({
  providedIn: 'root'
})
export class InmueblesService {
  private myAppUrl: string;
  private myApiUrl: string;

  constructor( private http: HttpClient) {
    this.myAppUrl = enviroment.endpoint;
    this.myApiUrl = 'api/inmuebles/';
  }

  getInmuebles(): Observable<inmueble[]> {
    /*const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('x-token', token ? token : '');
    console.log(headers);*/
    return this.http.get<inmueble[]>(this.myAppUrl + this.myApiUrl)
  }
  crearInmueble(inmueble: inmueble): Observable<inmueble> {
    return this.http.post<inmueble>(this.myAppUrl + this.myApiUrl+'create',inmueble);
  }

  //Buscar por referencia
  getInmueble(referencia: string): Observable<inmueble> {
    return this.http.get<inmueble>(this.myAppUrl + this.myApiUrl+referencia);
  }

  crearVisita(referencia: string,visita: Visita): Observable<Visita> {
    return this.http.post<Visita>(this.myAppUrl + this.myApiUrl+'visita/create/'+referencia, visita);
  }
}
