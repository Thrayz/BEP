import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatDatepicker } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { AnomalieService } from '../../../../@core/Services/anomalie.service';
import { Anomalie } from '../../../../@core/Models/Anomalie';
import { CasAjoutComponent } from '../../signature-part/cas-ajout/cas-ajout.component';
import { DecisionService } from '../../../../@core/Services/decision.service';
import { MaitriseService } from '../../../../@core/Services/maitrise.service';
import { NbWindowService } from '@nebular/theme';
import { AnomalieFilesService } from '../../../../@core/Services/anomalie-files.service';
import { AnomalieFiles } from '../../../../@core/Models/AnomalieFiles';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'ngx-ajout-fenc-qualite',
  templateUrl: './ajout-fenc-qualite.component.html',
  styleUrls: ['./ajout-fenc-qualite.component.scss']
})
export class AjoutFencQualiteComponent implements OnInit {

  private backendUrl = environment.apiUrl;

  nonConformite : string 
  securisation : string = "0"
  securisationButton : string = "false"
  statusFencForm : FormGroup;
  decisionForm : FormGroup;
  selectedDate : Date;
  showDatePicker:boolean;
  anomalieFiles:AnomalieFiles[] = []

  statusValidator:Boolean = true
  decisionValidator:Boolean = true

  idAnomalie:number
  previousFencData : any
  anomalie:Anomalie = new Anomalie()
  @ViewChild(CasAjoutComponent) signatureForm: CasAjoutComponent;

  
    ///////checbkoxes////////////
    NonConformiteChecked:Boolean
    securisationChecked:Boolean
    aucuneActionChecked:Boolean
    RetoucheDonneesChecked:Boolean
    RetoucheDreChecked:Boolean
    RebutChecked:Boolean
    ///////////////////////

  constructor(private anomalieFileService:AnomalieFilesService,private windowService:NbWindowService,private maitriseService:MaitriseService,private decisionService:DecisionService,private anomalieService:AnomalieService,private route:ActivatedRoute,public dialog: MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
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

    this.statusFencForm = new FormGroup({
      nonConformite :new FormControl('',Validators.required),
      securisation :new FormControl(''),
      commentaire:new FormControl(''),
    })

    this.decisionForm = new FormGroup({
      fencTransmettre :new FormControl(false,Validators.required),
      atelier :new FormControl('',Validators.required),
      inspectionRecord:new FormControl(false,Validators.required),
      planSurveillance:new FormControl(false,Validators.required),
      resolutionProbleme:new FormControl(false,Validators.required),
      aucunSuivi:new FormControl(false,Validators.required),
      reccurenceFenc:new FormControl(''),
      nom:new FormControl('',Validators.required),
      signature:new FormControl(''),
    })

    this.anomalieFileService.getAnomalieFilesByAnomalie(this.idAnomalie).subscribe(data=>{
      this.anomalieFiles = data
    })
  }

  get f() {
    return this.statusFencForm.controls;
  }

  get ff() {
    return this.decisionForm.controls;
  }


  loadAnomalieData(idAnomalie:number){
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.previousFencData = data
    })
    this.anomalieService.getAnomalieById(idAnomalie).subscribe(data => {
      this.anomalie = data
      this.NonConformiteChecked = this.anomalie.nonConformite
      this.securisationChecked = this.anomalie.securisation
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
  

  onSubmit(){
    if(this.statusFencForm.valid)
    {
      if(!(this.statusFencForm.get("securisation").value == null && this.statusFencForm.get("nonConformite").value == true)){
        this.anomalie.nonConformite = this.statusFencForm.get("nonConformite").value
        this.anomalie.securisation = this.statusFencForm.get("securisation").value
        this.anomalieService.updateStatusAnomalie(this.idAnomalie,this.statusFencForm.value).subscribe(data => {
          console.log(data.decision)
          this.router.navigateByUrl("/pages/FENC/qualiteProduit/attenteFENC") ;
        })
        console.log(this.statusFencForm.value)
      }
      else{
        this.statusValidator = false
      }
        
    }
  }


  onSubmitDecision(){
    if(this.decisionForm.get("fencTransmettre").value == null && this.decisionForm.get("inspectionRecord").value ==null && this.decisionForm.get("planSurveillance").value ==null && this.decisionForm.get("resolutionProbleme").value ==null && this.decisionForm.get("aucunSuivi").value ==null)
    {
      this.decisionValidator = false
    }
    else{
      if(this.decisionForm.get("fencTransmettre").value)
      this.decisionForm.get("atelier").setValue("")
      const signatureFormData = this.signatureForm.getFormData();
      console.log(signatureFormData)
      this.decisionForm.get("nom").setValue(signatureFormData.nom)
      this.decisionForm.get("signature").setValue(signatureFormData.signature)
      const {fencTransmettre ,atelier,inspectionRecord,planSurveillance,resolutionProbleme,aucunSuivi,nom,date,signature} = this.decisionForm.value;
      let anomalieObject = {fencTransmettre ,atelier,inspectionRecord,planSurveillance,resolutionProbleme,aucunSuivi,nom,date,signature,anomalie:this.anomalie}
      console.log(this.decisionForm.value)
      /*if(this.decisionForm.valid)
      {
        this.decisionService.addDecision(anomalieObject).subscribe(data => {
          console.log(data)
          this.router.navigateByUrl("/pages/FENC/production/attenteFENC")
        })
      }*/
      this.maitriseService.addMaitriseWithAnomalie(anomalieObject,anomalieObject.anomalie.idAnomalie).subscribe(data => {
        console.log(data)
        this.router.navigateByUrl("/pages/FENC/qualiteProduit/attenteFENC")
      })
    }
    
  }

  onCheckboxChange(checkboxName: string) {
    const checkboxes = ['fencTransmettre', 'inspectionRecord', 'planSurveillance', 'resolutionProbleme','aucunSuivi'];

    checkboxes.forEach(name => {
      if (name !== checkboxName) {
        this.decisionForm.get(name).setValue(false);
      }
    });
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
