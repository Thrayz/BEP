import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs-compat';
import { environment } from '../../../environments/environment';
import { Maitrise } from '../Models/DecisionProduitExtends/Maitrise';

@Injectable({
  providedIn: 'root'
})
export class MaitriseService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addMaitriseWithAnomalie(maitrise:any,idAnomalie:number):Observable<Maitrise>{
    return this.http.post<Maitrise>(`${this.apiUrl}maitrise/add/`+idAnomalie,maitrise);
  }
}
