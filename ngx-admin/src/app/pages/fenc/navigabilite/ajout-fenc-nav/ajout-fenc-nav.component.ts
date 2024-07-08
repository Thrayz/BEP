import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { CasAjoutComponent } from '../../signature-part/cas-ajout/cas-ajout.component';
import { ValidationNavService } from '../../../../@core/Services/validation-nav.service';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ValidationNav } from '../../../../@core/Models/ValidationCompExtends/ValidationNav';
import { AnomalieFilesService } from '../../../../@core/Services/anomalie-files.service';
import { NbWindowService } from '@nebular/theme';
import { AnomalieFiles } from '../../../../@core/Models/AnomalieFiles';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-ajout-fenc-nav',
  templateUrl: './ajout-fenc-nav.component.html',
  styleUrls: ['./ajout-fenc-nav.component.scss']
})
export class AjoutFencNavComponent implements OnInit {

  private backendUrl = environment.apiUrl;

  nonConformite : string 
  securisation : string = "0"
  securisationButton : string = "false"
  validationNavForm : FormGroup;
  selectedDate : Date;
  showDatePicker:boolean;
  anomalieFiles:AnomalieFiles[] =[]

  decisionValidator : Boolean

  idAnomalie:number
  previousFencData : any
  anomalie:Anomalie = new Anomalie()
  @ViewChild(CasAjoutComponent) signatureForm: CasAjoutComponent;

  validationNavToSend:ValidationNav = new ValidationNav()
  
  
  ///////checbkoxes////////////
  NonConformiteChecked:Boolean
  securisationChecked:Boolean
  aucuneActionChecked:Boolean
  RetoucheDonneesChecked:Boolean
  RetoucheDreChecked:Boolean
  RebutChecked:Boolean
  fencTransmettreChecked:Boolean
  inspectionRecordChecked:Boolean
  planSurveillanceChecked:Boolean
  resolutionProblemeChecked:Boolean
  aucunSuiviChecked:Boolean
  ///////////////////////


  constructor(private windowService:NbWindowService,private anomalieFileService:AnomalieFilesService,private validationNavService:ValidationNavService,private anomalieService:AnomalieService,private route:ActivatedRoute,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log("data : ",params['data'])
      console.log("parse : ",params['id'])
      this.idAnomalie = params['id'];
      this.loadAnomalieData(this.idAnomalie)
    });

    this.validationNavForm = new FormGroup({
      derogationProduit:new FormControl(''),
      justification:new FormControl(''),
      occurenceReport:new FormControl(''),
      nom:new FormControl('',Validators.required),
      signature:new FormControl('',Validators.required),
    })
  }

  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.previousFencData = data
      this.anomalie = data
      this.NonConformiteChecked = this.anomalie.nonConformite
      this.securisationChecked = this.anomalie.securisation
      this.aucuneActionChecked = this.anomalie.decision?.aucuneAction
      this.RetoucheDonneesChecked = this.anomalie.decision?.retoucheDonnees
      this.RetoucheDreChecked = this.anomalie.decision?.retoucheDre
      this.RebutChecked = this.anomalie.decision?.rebut
      this.fencTransmettreChecked = this.anomalie.maitrise?.fencTransmettre
      this.inspectionRecordChecked = this.anomalie.maitrise?.inspectionRecord
      this.planSurveillanceChecked = this.anomalie.maitrise?.planSurveillance
      this.resolutionProblemeChecked = this.anomalie.maitrise?.resolutionProbleme
      this.aucunSuiviChecked = this.anomalie.maitrise?.aucunSuivi
    })

    this.anomalieFileService.getAnomalieFilesByAnomalie(this.idAnomalie).subscribe(data=>{
      this.anomalieFiles = data
    })
  }

  mouseClickAlert(event){
    const editedText = event.target.textContent;
    console.log("text",editedText)
  }

  onFocus() {
    console.log("focus")
    const contentNom = document.getElementById('content-nom');
    contentNom.innerHTML = '';
    contentNom.style.color = 'black';
  }

  onBlur() {
    const contentNom = document.getElementById('content-nom');
    console.log(contentNom)
  }

  openDatePicker(datePicker: MatDatepicker<Date>) {
    
    this.showDatePicker = true;
    setTimeout(() => {
      datePicker.open();
      console.log("here")
    }, 200);
    
    
    const contentDate = document.getElementById('content-date');
    contentDate.innerHTML = '';
  }

  dateIconClickHandler(){
    
  }

  getDataSignatureQualite(data :any){

    console.log("nom-qualité : ",data.nom,"date-qualité : ",data.date)

  }

  getDataSignatureProduction(data :any){

    console.log("nom-production : ",data.nom,"date-production : ",data.date)

  }


  onSubmitJustification(){
    if(this.validationNavForm.get("derogationProduit").value == null && this.validationNavForm.get("occurenceReport").value == null)
    {
      console.log("error !!")
    }
    else{
      const signatureFormData = this.signatureForm.getFormData();
      console.log(signatureFormData)
      this.validationNavForm.get("nom").setValue(signatureFormData.nom)
      this.validationNavForm.get("signature").setValue(signatureFormData.signature)
      const {derogationProduit,justification,occurenceReport,nom,date,signature} = this.validationNavForm.value;
      let anomalie = this.anomalie
      this.validationNavToSend = {...this.validationNavToSend,derogationProduit,justification,occurenceReport,nom,date,signature,anomalie}
      console.log(this.validationNavToSend)
      console.log(this.validationNavForm.value)
      /*if(this.decisionForm.valid)
      {
        this.de
        cisionService.addDecision(anomalieObject).subscribe(data => {
          console.log(data)
          this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
        })
      }*/
      this.validationNavService.addValidationNavWithAnomalie(this.validationNavToSend,this.validationNavToSend.anomalie.idAnomalie).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
      })
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
    this.anomalieFileService.downloadFile(fileName).subscribe((response: Blob) => {
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

  getImageUrl(imageName: string): string {
    if(imageName)
    {
      return this.backendUrl+`oauth/file/images/serve/${imageName}`;

    }
  }

  


}
