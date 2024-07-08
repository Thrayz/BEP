import { Anomalie } from "../Anomalie";

export class VerificationTechnique{

    idVerificationTechnique:number
    processIdentique:boolean;
    materiauxIdentique:boolean
    maintenanceIdentique:boolean
    conclusion:boolean
    verificationNecessaire:boolean;
    commentaires:String
    verficateur:String
    date:Date;
    signature:String
    anomalie:Anomalie
}