import { Decision } from "./DecisionProduitExtends/Decision";
import { Justification } from "./DecisionProduitExtends/Justification";
import { Maitrise } from "./DecisionProduitExtends/Maitrise";
import { DemandeRetouche } from "./Dre/DemandeRetouche";
import { PriseEnCompte } from "./Dre/PriseEnCompte";
import { VerificationTechnique } from "./Dre/VerificationTechnique";
import { User } from "./User";
import { ValidationNav } from "./ValidationCompExtends/ValidationNav";

export class Anomalie{

    idAnomalie:number;
    codeArticle:string;
    partNumber:string;
    designation:string;
    dateDetection:Date;
    lieuDetection:string;
    quiDetecter:string;
    sn:string;
    of:number;
    quantite:number;
    typeEcart:string;
    standard:string;
    zone:string;
    typeDetection:string;
    nonConformite:boolean;
    securisation:boolean;
    commentaire:string;
    dateCreation:Date;
    statusService:string;

    user:User;

    /////decisionProduit/////
    decision:Decision;
    maitrise:Maitrise
    justification:Justification

    ///Validation Complementaire/////
    validationNav:ValidationNav

    //// DRE /////
    demandeRetouche:DemandeRetouche
    verificationTechnique:VerificationTechnique
    priseEnCompte:PriseEnCompte

}