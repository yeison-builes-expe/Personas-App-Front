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
    const auth_token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2MDFlZWY5LTBkNzctNDYzZi05OWFlLWExMTNlYjUzYTAxMSIsImV4cCI6MTczMTYxOTU4NiwiaXNzIjoiUGFjdGlhIiwiYXVkIjoiQXBwVXNlcnMifQ.3NM5Kr7pH9KV4f-wN5I8_QZ8nHPIHZKqOMzUDy5XNVo"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.get<ApiPersonasResponse<Persona[]>>(`${this.apiUrl}personas`,{headers:headers})
  }

  createPerson(record:Persona):Observable<ApiPersonasResponse<Persona>>{
    const auth_token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2MDFlZWY5LTBkNzctNDYzZi05OWFlLWExMTNlYjUzYTAxMSIsImV4cCI6MTczMTYxOTU4NiwiaXNzIjoiUGFjdGlhIiwiYXVkIjoiQXBwVXNlcnMifQ.3NM5Kr7pH9KV4f-wN5I8_QZ8nHPIHZKqOMzUDy5XNVo"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.post<ApiPersonasResponse<Persona>>(`${this.apiUrl}personas`,record,{headers:headers})
  }

  deletePerson(id:number):Observable<ApiPersonasResponse<boolean>>{
    const auth_token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2MDFlZWY5LTBkNzctNDYzZi05OWFlLWExMTNlYjUzYTAxMSIsImV4cCI6MTczMTYxOTU4NiwiaXNzIjoiUGFjdGlhIiwiYXVkIjoiQXBwVXNlcnMifQ.3NM5Kr7pH9KV4f-wN5I8_QZ8nHPIHZKqOMzUDy5XNVo"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.delete<ApiPersonasResponse<boolean>>(`${this.apiUrl}personas/${id}`,{headers:headers})
  }

  updatePerson(record:Persona):Observable<ApiPersonasResponse<Persona>>{
    const auth_token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhZG1pbiIsImp0aSI6IjE2MDFlZWY5LTBkNzctNDYzZi05OWFlLWExMTNlYjUzYTAxMSIsImV4cCI6MTczMTYxOTU4NiwiaXNzIjoiUGFjdGlhIiwiYXVkIjoiQXBwVXNlcnMifQ.3NM5Kr7pH9KV4f-wN5I8_QZ8nHPIHZKqOMzUDy5XNVo"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    })
    return this.http.put<ApiPersonasResponse<Persona>>(`${this.apiUrl}personas`,record,{headers:headers})
  }
}
