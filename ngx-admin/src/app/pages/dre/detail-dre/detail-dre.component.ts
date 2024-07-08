import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DreService } from '../../../@core/Services/dre.service';
import { AnomalieService } from '../../../@core/Services/anomalie.service';
import { DemandeRetouche } from '../../../@core/Models/Dre/DemandeRetouche';
import { Anomalie } from '../../../@core/Models/Anomalie';
import { PriseEnCompte } from '../../../@core/Models/Dre/PriseEnCompte';
import { environment } from '../../../../environments/environment';
import { DreFilesUploaded } from '../../../@core/Models/Dre/DreFilesUploadd';
import { NbWindowService } from '@nebular/theme';
import { AnomalieFiles } from '../../../@core/Models/AnomalieFiles';
import { DreFilesUploadService } from '../../../@core/Services/dre-files-upload.service';


@Component({
  selector: 'ngx-detail-dre',
  templateUrl: './detail-dre.component.html',
  styleUrls: ['./detail-dre.component.scss']
})
export class DetailDreComponent implements OnInit {

  qualiteDreForm : FormGroup
  idAnomalie : number
  anomalie:Anomalie
  priseEnCompte:PriseEnCompte = new PriseEnCompte()
  dreFiles:DreFilesUploaded[] = []

  ////// CheckBoxes //////
  processIdentiqueChecked:boolean
  materiauxIdentiqueChecked:boolean
  maintenanceIdentiqueChecked:boolean
  conclusionChecked:boolean
  verificationNecessaireChecked:boolean
  priseEnCompteChecked:boolean

  private backendUrl = environment.apiUrl;


  constructor(private dreFilesUploadService:DreFilesUploadService,private windowService:NbWindowService,private dreService:DreService,private anomalieService:AnomalieService,private route:ActivatedRoute,private router:Router) {
    this.qualiteDreForm = new FormGroup({
      priseEncompte: new FormControl('', [Validators.required]),
      commentaires: new FormControl('', [Validators.required]),
      qualiteProduit: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      signature: new FormControl('', [Validators.required]),

    })
   }

  ngOnInit(): void {
    console.log(this.route.snapshot.params["id"])
      this.idAnomalie = this.route.snapshot.params["id"]
      this.loadAnomalieData(this.idAnomalie)
    /*this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['idAnomalie'])
      this.idAnomalie = params['idAnomalie'];
      this.loadAnomalieData(this.idAnomalie)
    });*/

    this.dreFilesUploadService.getDreFilesUploadByAnomalie(this.anomalie?.demandeRetouche?.idDemandeRetouche).subscribe(data=>{
      this.dreFiles = data
    })
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
      this.priseEnCompteChecked = this.anomalie?.priseEnCompte?.priseEncompte
    })
  }

  onSubmit(){
    
    let anomalie = this.anomalie
    this.priseEnCompte = this.qualiteDreForm.value
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


  openWindow(contentTemplate) {
    this.windowService.open(
      contentTemplate,
      {
        title: 'Les piéces jointes',
        context: {
          text: '',
        },
        buttons:{
          minimize: false,
          maximize: false,
          fullScreen: false,
        }
      },
    );
  }

  downloadFile(fileName:string){
    this.dreFilesUploadService.downloadFile(fileName).subscribe((response: Blob) => {
      const blob = new Blob([response], { type: response.type });
  
      // Create a link element and simulate a click to trigger the download
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
  
      // Clean up after the link is clicked
      window.URL.revokeObjectURL(link.href);
      link.remove();
    });
  }

}
