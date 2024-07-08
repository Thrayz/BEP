import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { DemandeRetouche } from '../../../../@core/Models/Dre/DemandeRetouche';
import { DreService } from '../../../../@core/Services/dre.service';
import { VerificationTechnique } from '../../../../@core/Models/Dre/VerificationTechnique';
import { PriseEnCompte } from '../../../../@core/Models/Dre/PriseEnCompte';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../@core/Models/User';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';

@Component({
  selector: 'ngx-ajout-dre-qualite',
  templateUrl: './ajout-dre-qualite.component.html',
  styleUrls: ['./ajout-dre-qualite.component.scss']
})
export class AjoutDreQualiteComponent implements OnInit {

  
  qualiteDreForm : FormGroup
  idAnomalie : number
  anomalie:Anomalie
  priseEnCompte:PriseEnCompte = new PriseEnCompte()
  currentDate = new Date()
  currentUser:User;


  ////// CheckBoxes //////
  processIdentiqueChecked:boolean
  materiauxIdentiqueChecked:boolean
  maintenanceIdentiqueChecked:boolean
  conclusionChecked:boolean
  verificationNecessaireChecked:boolean

  private backendUrl = environment.apiUrl;



  constructor(private tokenStorage:TokenStorageService,private dreService:DreService,private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    this.qualiteDreForm = new FormGroup({
      priseEncompte: new FormControl('', [Validators.required]),
      commentaires: new FormControl('', [Validators.required]),
      qualiteProduit: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      signature: new FormControl('', [Validators.required]),

    })

    this.currentUser = this.tokenStorage.getUser();

   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.loadAnomalieData(this.idAnomalie)
    });
    /*this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['idAnomalie'])
      this.idAnomalie = params['idAnomalie'];
      this.loadAnomalieData(this.idAnomalie)
    });*/
  }


  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.anomalie = data
      console.log("data : ",data)
      console.log("this.anomalie : ",this.anomalie)
      this.processIdentiqueChecked = this.anomalie?.verificationTechnique?.processIdentique
      this.materiauxIdentiqueChecked = this.anomalie?.verificationTechnique?.materiauxIdentique
      this.maintenanceIdentiqueChecked = this.anomalie?.verificationTechnique?.maintenanceIdentique
      this.conclusionChecked = this.anomalie?.verificationTechnique?.conclusion
      this.verificationNecessaireChecked = this.anomalie?.verificationTechnique?.verificationNecessaire
    })
  }

  onSubmit(){
    
    let anomalie = this.anomalie
    this.priseEnCompte = this.qualiteDreForm.value
    this.priseEnCompte.qualiteProduit = this.currentUser.nom + " " + this.currentUser.prenom
    this.priseEnCompte.signature = this.currentUser.signature
    this.priseEnCompte.anomalie = anomalie
    console.log(this.priseEnCompte)
    /*if(this.decisionForm.valid)
    {
      this.de
      cisionService.addDecision(anomalieObject).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
    }*/
    this.dreService.addPriseEnCompteWithAnomalie(this.priseEnCompte,this.anomalie.idAnomalie).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/pages/DRE/qualite/attenteDRE")
    })
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

}
