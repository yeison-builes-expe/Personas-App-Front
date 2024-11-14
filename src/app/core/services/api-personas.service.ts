import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map, Observable } from 'rxjs';
import { Persona } from '../models/persona.interface';
import { ApiPersonasResponse } from '../models/api-personas-response.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiPersonasService {
  private apiUrl:string = environment.apiUrl;
  constructor(private http : HttpClient) { }

  getPeople():Observable<ApiPersonasResponse<Persona[]>>{
    return this.http.get<ApiPersonasResponse<Persona[]>>(`${this.apiUrl}personas`)
  }

  createPerson(record:Persona):Observable<ApiPersonasResponse<Persona>>{
    console.log(record)
    return this.http.post<ApiPersonasResponse<Persona>>(`${this.apiUrl}personas`,record)
  }

  deletePerson(id:number):Observable<ApiPersonasResponse<boolean>>{
    return this.http.delete<ApiPersonasResponse<boolean>>(`${this.apiUrl}personas/${id}`)
  }

  updatePerson(record:Persona):Observable<ApiPersonasResponse<Persona>>{
    return this.http.put<ApiPersonasResponse<Persona>>(`${this.apiUrl}personas`,record)
  }

  login():Observable<ApiPersonasResponse<string>>{
    const loginCred :any={
      User:"admin",
      Password:"admin"
    }
    return this.http.post<ApiPersonasResponse<string>>(`${this.apiUrl}login`,loginCred)
  }
}
