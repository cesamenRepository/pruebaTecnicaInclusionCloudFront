import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parametros } from '../models/parametros';

@Injectable({
  providedIn: 'root'
})
export class EnviaParametrosService {
 
  private baseEndPoint ='http://localhost:5000';
  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  public consultaGet(x:number,y:number,n:number): Observable<string>{
    return this.http.get<string>(`${this.baseEndPoint}/get-consulta/valorx/${x}/valory/${y}/valorn/${n}`);
  }

  public consultaPost(datos: Parametros): Observable<string>{
  return this.http.post<string>(`${this.baseEndPoint}/post-consulta`,datos, {headers: this.cabeceras});
}
}
