import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { DemandeRetouche } from '../../../../@core/Models/Dre/DemandeRetouche';
import { DreService } from '../../../../@core/Services/dre.service';
import { VerificationTechnique } from '../../../../@core/Models/Dre/VerificationTechnique';
import { environment } from '../../../../../environments/environment';
import { User } from '../../../../@core/Models/User';
import { TokenStorageService } from '../../../../@core/Services/token-storage.service';

@Component({
  selector: 'ngx-ajout-dre-be',
  templateUrl: './ajout-dre-be.component.html',
  styleUrls: ['./ajout-dre-be.component.scss']
})
export class AjoutDreBeComponent implements OnInit {

  
  beDreForm : FormGroup
  idAnomalie : number
  anomalie:Anomalie
  verificationTechnique:VerificationTechnique = new VerificationTechnique()
  processIdentique:boolean
  materiauxIdentique:boolean
  maintenanceIdentique:boolean
  conclusion:boolean = false
  currentDate = new Date()
  currentUser:User;
  
  private backendUrl = environment.apiUrl;




  constructor(private tokenStorage:TokenStorageService,private dreService:DreService,private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    this.beDreForm = new FormGroup({
      processIdentique: new FormControl('', [Validators.required]),
      materiauxIdentique: new FormControl('', [Validators.required]),
      maintenanceIdentique: new FormControl('', [Validators.required]),
      conclusion: new FormControl('', [Validators.required]),
      verificationNecessaire: new FormControl('', [Validators.required]),
      commentaires: new FormControl('', [Validators.required]),
      verficateur: new FormControl('', [Validators.required]),
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
  }


  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.anomalie = data
    })
  }


  updateConclusion() {

    console.log("processIdentique : ",this.processIdentique)
    console.log("materiauxIdentique : ",this.materiauxIdentique)
    console.log("maintenanceIdentique : ",this.maintenanceIdentique)

    setTimeout(() => {
      if(this.processIdentique == true && this.materiauxIdentique == true && this.maintenanceIdentique == true){
        this.conclusion = true
      }else {
        this.conclusion = false
      }
      console.log("conclusion :",this.conclusion)
      // Set the value of the conclusion control in the form
      this.beDreForm.get('conclusion').setValue(this.conclusion);
    }, 500);
    // Update the conclusion based on the other values
    
  }


  onSubmit(){
    let anomalie = this.anomalie
    this.verificationTechnique = this.beDreForm.value
    this.verificationTechnique.verficateur = this.currentUser.nom + " " + this.currentUser.prenom
    this.verificationTechnique.signature = this.currentUser.signature
    this.verificationTechnique.anomalie = anomalie
    console.log(this.verificationTechnique)
    /*if(this.decisionForm.valid)
    {
      this.de
      cisionService.addDecision(anomalieObject).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
    }*/
    this.dreService.addVerificationTechniqueWithAnomalie(this.verificationTechnique,this.anomalie.idAnomalie).subscribe(data => {
      console.log(data)
      this.router.navigateByUrl("/pages/DRE/be/attenteDRE")
    })
  }

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

}
