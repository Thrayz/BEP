import { Anomalie } from "./Anomalie";

export class User{
    idUser: number;
    nom:string;
    prenom:string;
    email:string;
    password:string;
    matricule:string;
    serviceStatus:string;
    poste:string;
    signature:string;
    
    anomalies:Anomalie[]

}