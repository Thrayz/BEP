import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DreFilesUploaded } from '../Models/Dre/DreFilesUploadd';

@Injectable({
  providedIn: 'root'
})
export class DreFilesUploadService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addDreFilesUpload(file:any,idDemandeRetouche:number):Observable<string>{
    return this.http.post(`${this.apiUrl}file/files/upload/`+idDemandeRetouche,file, { responseType: 'text' });
  }

  public getDreFilesUploadByAnomalie(idAnomalie:number):Observable<DreFilesUploaded[]>{
    return this.http.get<DreFilesUploaded[]>(`${this.apiUrl}DreFiles/getByIdAnomalie/`+idAnomalie);
  }

  public downloadFile(fileName: string):Observable<any> {
    return this.http.get<any>(`${this.apiUrl}file/anomalieFiles/download/${fileName}`, {
      responseType: 'blob' as 'json', 
    })
  }

}
