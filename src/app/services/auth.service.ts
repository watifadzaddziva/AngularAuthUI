import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
baseUrl="https://localhost:7045/api/User"

  constructor(private http: HttpClient) { }

  signup(user: any):Observable<any>{
    return this.http.post<any>(`${this.baseUrl}/register`,user)
  }
 login(user: any):Observable<any>{
  return this.http.post<any>(`${this.baseUrl}/login`, user)
 }

}
