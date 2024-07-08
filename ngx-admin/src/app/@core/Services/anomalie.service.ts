import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Anomalie } from '../Models/Anomalie';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnomalieService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addAnomalie(anomalie:any,idUser:number):Observable<Anomalie>{
    return this.http.post<Anomalie>(`${this.apiUrl}anomalie/add/`+idUser,anomalie);
  }

  public updateAnomalie(anomalie:any):Observable<Anomalie>{
    return this.http.put<Anomalie>(`${this.apiUrl}anomalie/update`,anomalie);
  }

  public getAllAnomalie():Observable<Anomalie[]>{
    return this.http.get<Anomalie[]>(`${this.apiUrl}anomalie/get`);
  }

  public deleteAnomalieById(idAnomalie:number){
    return this.http.delete(`${this.apiUrl}anomalie/delete/`+idAnomalie);
  }

  public getAnomalieById(idAnomalie:number):Observable<Anomalie>{
    return this.http.get<Anomalie>(`${this.apiUrl}anomalie/get/`+idAnomalie);
  }

  public updateStatusAnomalie(idAnomalie:number,anomalie:Anomalie):Observable<Anomalie>{
    return this.http.put<Anomalie>(`${this.apiUrl}anomalie/updateStatus/`+idAnomalie,anomalie);
  }

  public getAnomalieByStatus(status:string):Observable<Anomalie[]>{
    return this.http.get<Anomalie[]>(`${this.apiUrl}anomalie/getByStatus/`+status);
  }

  public getAnomalieEnAttenteByService(service:string):Observable<Anomalie[]>{
    return this.http.get<Anomalie[]>(`${this.apiUrl}anomalie/anomalieEnAttente/`+service);
  }

  public getDreEnAttenteByService(service:string):Observable<Anomalie[]>{
    return this.http.get<Anomalie[]>(`${this.apiUrl}anomalie/dreEnAttente/`+service);
  }

}
