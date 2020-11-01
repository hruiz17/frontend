import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empleado } from 'src/model/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  baseUrl:string = "http://localhost:8080/api/empleado";

  constructor(private http:HttpClient) { }

  getAll() : Observable<any>{
    return this.http.get(this.baseUrl + "/all");
  }

  save(persona: Empleado): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json');
    return this.http.post(this.baseUrl +"/save", JSON.stringify(persona), {headers: headers});
  }

  delete(id: number) : Observable<any>{
    return this.http.get(this.baseUrl + "/delete/"+id);
  }
}
