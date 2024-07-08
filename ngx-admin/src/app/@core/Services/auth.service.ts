import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Anomalie } from '../Models/Anomalie';
import { User } from '../Models/User';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = environment.apiUrl;

  
  constructor(private http:HttpClient) { }

  public login(user:User):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}oauth/login`,user,httpOptions);
  }

  public signup(user:User):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}oauth/signup`,user,httpOptions);
  }



}
