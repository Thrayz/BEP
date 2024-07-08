import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { AnomalieFiles } from '../Models/AnomalieFiles';


@Injectable({
  providedIn: 'root'
})
export class AnomalieFilesService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addAnomalieFile(file:any,idAnomalieFile:number):Observable<string>{
    return this.http.post(`${this.apiUrl}file/anomalieFile/upload/`+idAnomalieFile,file, { responseType: 'text' });
  }

  public getAnomalieFilesByAnomalie(idAnomalie:number):Observable<AnomalieFiles[]>{
    return this.http.get<AnomalieFiles[]>(`${this.apiUrl}anomalieFiles/getByIdAnomalie/`+idAnomalie);
  }

  public downloadFile(fileName: string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}file/anomalieFiles/download/${fileName}`, {
      responseType: 'blob' as 'json', 
    })
  }
}
