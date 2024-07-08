import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { DemandeRetouche } from '../Models/Dre/DemandeRetouche';
import { Observable } from 'rxjs-compat';
import { PriseEnCompte } from '../Models/Dre/PriseEnCompte';
import { VerificationTechnique } from '../Models/Dre/VerificationTechnique';


@Injectable({
  providedIn: 'root'
})
export class DreService {

  private apiUrl = environment.apiUrl;

  constructor(private http:HttpClient) { }

  public addDemandeRetoucheWithAnomalie(demandeRetouche:any,idAnomalie:number):Observable<DemandeRetouche>{
    return this.http.post<DemandeRetouche>(`${this.apiUrl}demandeRetouche/add/`+idAnomalie,demandeRetouche);
  }

  public addPriseEnCompteWithAnomalie(priseEnCompte:any,idAnomalie:number):Observable<PriseEnCompte>{
    return this.http.post<PriseEnCompte>(`${this.apiUrl}priseEnCompte/add/`+idAnomalie,priseEnCompte);
  }

  public addVerificationTechniqueWithAnomalie(verificationTechnique:any,idAnomalie:number):Observable<VerificationTechnique>{
    return this.http.post<VerificationTechnique>(`${this.apiUrl}verificationTechnique/add/`+idAnomalie,verificationTechnique);
  }
}
