import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}user/get`);
  }

  public getUserById(idUser:number):Observable<User>{
    return this.http.get<User>(`${this.apiUrl}user/get/`+idUser);
  }

  public addUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.apiUrl}user/add`,user);
  }

  public addSignatureUser(user:User):Observable<String>{
    return this.http.post(`${this.apiUrl}file/images/upload`,user, { responseType: 'text' });
  }

}
