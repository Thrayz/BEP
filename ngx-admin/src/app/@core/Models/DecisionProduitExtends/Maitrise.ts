import { DecisionProduit } from "../DecisionProduit";

export class Maitrise extends DecisionProduit{
    
    idMaitrise:number
    fencTransmettre:Boolean
    atelier:string
    inspectionRecord:Boolean
    planSurveillance:Boolean
    resolutionProbleme:Boolean
    aucunSuivi:Boolean
    derogationProduitLivrable:Boolean


}