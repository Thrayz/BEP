import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Justification } from '../Models/DecisionProduitExtends/Justification';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JustificationService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addJustificationWithAnomalie(justification:any,idAnomalie:number):Observable<Justification>{
    return this.http.post<Justification>(`${this.apiUrl}justification/add/`+idAnomalie,justification);
  }

  public addJustification(justification:any):Observable<Justification>{
    return this.http.post<Justification>(`${this.apiUrl}justification/add`,justification);
  }

  public getAllJustification():Observable<Justification[]>{
    return this.http.get<Justification[]>(`${this.apiUrl}justification/get`);
  }

  public getJustificationyId(idJustification:number):Observable<Justification>{
    return this.http.get<Justification>(`${this.apiUrl}justification/get/`+idJustification);
  }
}
