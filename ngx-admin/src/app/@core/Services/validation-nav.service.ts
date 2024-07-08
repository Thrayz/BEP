import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ValidationNav } from '../Models/ValidationCompExtends/ValidationNav';

@Injectable({
  providedIn: 'root'
})
export class ValidationNavService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addValidationNavWithAnomalie(validationNav:any,idAnomalie:number):Observable<ValidationNav>{
    return this.http.post<ValidationNav>(`${this.apiUrl}validationNav/add/`+idAnomalie,validationNav);
  }

  public addValidationNav(validationNav:any):Observable<ValidationNav>{
    return this.http.post<ValidationNav>(`${this.apiUrl}validationNav/add`,validationNav);
  }

  public getAllValidationNav():Observable<ValidationNav[]>{
    return this.http.get<ValidationNav[]>(`${this.apiUrl}validationNav/get`);
  }

  public getValidationNavById(idValidationNav:number):Observable<ValidationNav>{
    return this.http.get<ValidationNav>(`${this.apiUrl}validationNav/get/`+idValidationNav);
  }
}
