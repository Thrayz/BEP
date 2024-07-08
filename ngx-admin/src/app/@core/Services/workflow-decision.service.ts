import { Injectable } from '@angular/core';
import { Anomalie } from '../Models/Anomalie';

@Injectable({
  providedIn: 'root'
})
export class WorkflowDecisionService {

  constructor() { }

  public statusCheck(anomalie:Anomalie){
    if(anomalie.nonConformite == null){
      return false
    }
    else
    return true
  }

  public qualiteProd(anomalie:Anomalie){
    if(this.statusCheck(anomalie) && (anomalie.decision && anomalie.decision.aucuneAction && anomalie.justification && !anomalie.validationNav.derogationProduit))
    {
      return "acceptation en etat"
    }
    else if (this.statusCheck(anomalie) && (anomalie.decision && anomalie.decision.retoucheDonnees && anomalie.justification)){
      return "retouche donnees approuver"
    }
    else if (this.statusCheck(anomalie) && (anomalie.decision && anomalie.decision.retoucheDre && anomalie.justification && anomalie.justification.etatDre && anomalie.validationNav)){
      return "retouche dre impact"
    }
    else if (this.statusCheck(anomalie) && (anomalie.decision && anomalie.decision.rebut && anomalie.justification)){
      return "etat rebut"
    }
    else 
    return "none"
  }
}
