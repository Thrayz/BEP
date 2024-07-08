import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs-compat';
import { Decision } from '../Models/DecisionProduitExtends/Decision';

@Injectable({
  providedIn: 'root'
})
export class DecisionService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addDecisionWithAnomalie(decision:any,idAnomalie:number,idUser:number):Observable<Decision>{
    return this.http.post<Decision>(`${this.apiUrl}decision/add/`+idAnomalie+"/"+idUser,decision);
  }

  public addDecision(decision:any):Observable<Decision>{
    return this.http.post<Decision>(`${this.apiUrl}decision/add`,decision);
  }

  public getAllDecision():Observable<Decision[]>{
    return this.http.get<Decision[]>(`${this.apiUrl}decision/get`);
  }

  public getDecisionById(idDecision:number):Observable<Decision>{
    return this.http.get<Decision>(`${this.apiUrl}decision/get/`+idDecision);
  }
}
