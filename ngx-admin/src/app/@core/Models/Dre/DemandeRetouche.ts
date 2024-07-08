import { Anomalie } from "../Anomalie";
import { DreFilesUploaded } from "./DreFilesUploadd";

export class DemandeRetouche{

    idDemandeRetouche:number
    xValue:number
    yValue:number
    ncassocier:String;
    resumerSolution:String
    cds:number
    montantDerives:number
    coutEstimer:number;
    demandeur:String
    date:Date;
    signature:String
    anomalie:Anomalie
    dreFiles:DreFilesUploaded
}